import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Encurtador } from 'src/app/models/encurtador';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'detalhe-encurtador',
  templateUrl: './detalhe-encurtador.component.html',
  styleUrls: ['./detalhe-encurtador.component.scss']
})
export class DetalheEncurtadorComponent implements OnInit {

  @Input("encurtado") encurtado: Encurtador | undefined;
  @Output() deleted: EventEmitter<any> = new EventEmitter();

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }

  copyURL(url:string){
    navigator.clipboard.writeText(`${environment.endereco}/${url}`);
    this.showSuccess("Endereço copiado com sucesso.")
  }

  remove(encurtado: Encurtador | null){
    let encurtados = localStorage.getItem("encurtados") ? JSON.parse((localStorage.getItem("encurtados") ?? '')) : [];
    encurtados = encurtados.filter((e: { id: number | undefined; }) => e.id != encurtado?.id);
    localStorage.setItem("encurtados", JSON.stringify(encurtados));
    this.deleted.emit();
  }

  showSuccess(message: string) {
    this.toastService.show(message, { classname: 'bg-success text-light', delay: 10000 });
  }

}
