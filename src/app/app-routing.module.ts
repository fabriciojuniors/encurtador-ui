import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncurtadorComponent } from './pages/encurtador/encurtador.component';
import { RedirecionarComponent } from './pages/redirecionar/redirecionar.component';

const routes: Routes = [
  {
    path: '',
    component: EncurtadorComponent
  },
  {
    path: ':url',
    component: RedirecionarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
