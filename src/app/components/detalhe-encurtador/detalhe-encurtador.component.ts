import { Component, Input, OnInit } from '@angular/core';
import { Encurtador } from 'src/app/models/encurtador';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'detalhe-encurtador',
  templateUrl: './detalhe-encurtador.component.html',
  styleUrls: ['./detalhe-encurtador.component.scss']
})
export class DetalheEncurtadorComponent implements OnInit {

  @Input("encurtado") encurtado: Encurtador | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  copyURL(url:string){
    navigator.clipboard.writeText(`${environment.endereco}/${url}`);
  }

}
