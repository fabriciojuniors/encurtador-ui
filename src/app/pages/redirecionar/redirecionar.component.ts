import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncurtadorService } from 'src/app/services/encurtador.service';
import { ToastService } from 'src/app/shared/toast/toast.service';

@Component({
  selector: 'app-redirecionar',
  templateUrl: './redirecionar.component.html',
  styleUrls: ['./redirecionar.component.scss']
})
export class RedirecionarComponent implements OnInit {

  segundos:number = 5;

  constructor(private activatedRoute : ActivatedRoute, private service: EncurtadorService, private toastService : ToastService, private route: Router) {

    this.activatedRoute.params.forEach(params => {
      if(params['url']){
        this.service.findByEncodedURL({url: params['url']}).subscribe(
          (encurtador) => {
            setInterval(() => {
              this.segundos--;
              if(this.segundos == 0){
                window.location.replace(encurtador.url);
              }
            }, 1000)
          },
          (error) => {            
            this.showDanger(`${error.error.errors[0].message}`);
            this.route.navigate(["/"]);
          }
        )
      }
      
    })

    
   }

  ngOnInit(): void {
  }

  showDanger(message: string) {
    this.toastService.show(message, { classname: 'bg-warning text-light', delay: 10000 });
  }

}
