import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Encurtador } from 'src/app/models/encurtador';
import { EncurtadorService } from 'src/app/services/encurtador.service';
import { ToastService } from 'src/app/shared/toast/toast.service';

@Component({
  selector: 'app-encurtador',
  templateUrl: './encurtador.component.html',
  styleUrls: ['./encurtador.component.scss']
})
export class EncurtadorComponent implements OnInit {

  formulario: FormGroup;
  loading = false;
  encurtado: Encurtador | undefined;

  encurtados: Encurtador[] = []

  constructor(private service: EncurtadorService,
    private toastService: ToastService,
    private fb: FormBuilder) {
    this.formulario = this.fb.group({
      ["url"]: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  ngOnInit(): void {
    this.refresh();
  }

  showSuccess(message: string) {
    this.toastService.show(message, { classname: 'bg-success text-light', delay: 10000 });
  }
  showDanger(message: string) {
    this.toastService.show(message, { classname: 'bg-warning text-light', delay: 10000 });
  }

  refresh() {
    this.encurtados = localStorage.getItem("encurtados") ? JSON.parse((localStorage.getItem("encurtados") ?? '')) : [];

    if (this.encurtados.length > 0) {
      this.service.findAllById(this.encurtados.flatMap(e => e.id)).subscribe(
        (encurtados) => this.encurtados = encurtados
      )
    }
  }

  encurtar() {
    this.loading = true;
    this.service.save(this.formulario.value).subscribe(
      (encurtador) => {
        this.showSuccess("URL Encurtada");
        this.encurtados.push(encurtador);
        localStorage.setItem("encurtados", JSON.stringify(this.encurtados));
      },
      (error) => this.showDanger(`Erro ao encurtar URL <br> ${error.error.message}`),
      () => {
        this.loading = false;
        this.formulario.reset();
      }

    )

  }

}
