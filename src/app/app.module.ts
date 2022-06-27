import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncurtadorComponent } from './pages/encurtador/encurtador.component';
import { ToastsContainer } from './shared/toast/toasts-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalheEncurtadorComponent } from './components/detalhe-encurtador/detalhe-encurtador.component';
import { RedirecionarComponent } from './pages/redirecionar/redirecionar.component';

@NgModule({
  declarations: [
    AppComponent,
    EncurtadorComponent,
    ToastsContainer,
    DetalheEncurtadorComponent,
    RedirecionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
