import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { BrinquedosComponent } from './brinquedos/brinquedos.component'
import { AlimentacaoComponent } from './alimentacao/alimentacao.component'
import { DiversosComponent } from './diversos/diversos.component'
import { ContatoComponent } from './contato/contato.component'

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'brinquedos', component: BrinquedosComponent },
  { path: 'alimentacao', component: AlimentacaoComponent },
  { path: 'diversos', component: DiversosComponent },
  { path: 'contato', component: ContatoComponent }
]
