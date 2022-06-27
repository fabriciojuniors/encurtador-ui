import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }

  copyURL(url:string){
    navigator.clipboard.writeText(`${environment.endereco}/${url}`);
    this.showSuccess("Endereço copiado com sucesso.")
  }

  showSuccess(message: string) {
    this.toastService.show(message, { classname: 'bg-success text-light', delay: 10000 });
  }

}
