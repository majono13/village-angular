import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-alimentacao',
  templateUrl: './alimentacao.component.html',
  styleUrls: ['./alimentacao.component.css']
})
export class AlimentacaoComponent implements OnInit {

  ofertas: Oferta[] = []
  ofertasCaes: Oferta[] = []


  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {

    this.ofertasService.getOfertas('alim-gatos').toPromise()
      .then((ofertas: Oferta[]) => { //está recebendo o array de ofertas devolvido pela promise como parametro
        this.ofertas = ofertas
      })

      .catch((param: any) => {
        console.log(param)
      })

    this.ofertasService.getOfertas('alim-caes').toPromise()
      .then((ofertas: Oferta[]) => { //está recebendo o array de ofertas devolvido pela promise como parametro
        this.ofertasCaes = ofertas
      })

      .catch((param: any) => {
        console.log(param)
      })
  }
}
