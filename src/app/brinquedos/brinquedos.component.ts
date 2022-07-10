import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'


@Component({
  selector: 'app-brinquedos',
  templateUrl: './brinquedos.component.html',
  styleUrls: ['./brinquedos.component.css']
})
export class BrinquedosComponent implements OnInit {

  ofertas: Oferta[] = []


  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {

    this.ofertasService.getOfertas('brinq').toPromise()
      .then((ofertas: Oferta[]) => { //está recebendo o array de ofertas devolvido pela promise como parametro
        this.ofertas = ofertas
      })

      .catch((param: any) => {
        console.log(param)
      })
  }

}
