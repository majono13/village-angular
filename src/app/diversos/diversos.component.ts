import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-diversos',
  templateUrl: './diversos.component.html',
  styleUrls: ['./diversos.component.css']
})
export class DiversosComponent implements OnInit {

  ofertasGatos: Oferta[] = []
  ofertasCaes: Oferta[] = []
  ofertasOut: Oferta[] = []
  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {

    this.ofertasService.getOfertas('div-gatos').toPromise()
      .then((ofertas: Oferta[]) => { //está recebendo o array de ofertas devolvido pela promise como parametro
        this.ofertasGatos = ofertas
      })

      .catch((param: any) => {
        console.log(param)
      })

    this.ofertasService.getOfertas('div-caes').toPromise()
      .then((ofertas: Oferta[]) => { //está recebendo o array de ofertas devolvido pela promise como parametro
        this.ofertasCaes = ofertas
      })

      .catch((param: any) => {
        console.log(param)
      })

    this.ofertasService.getOfertas('roupinhas').toPromise()
      .then((ofertas: Oferta[]) => { //está recebendo o array de ofertas devolvido pela promise como parametro
        this.ofertasOut = ofertas
      })

      .catch((param: any) => {
        console.log(param)
      })
  }

}
