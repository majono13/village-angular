import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { ROUTES } from './app.routes'

import { OfertasService } from './ofertas.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrinquedosComponent } from './brinquedos/brinquedos.component';
import { AlimentacaoComponent } from './alimentacao/alimentacao.component';
import { DiversosComponent } from './diversos/diversos.component';
import { ContatoComponent } from './contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    BrinquedosComponent,
    AlimentacaoComponent,
    DiversosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    OfertasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
