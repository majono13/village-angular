import { Component, OnInit, Inject } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  ofertasMais: Oferta[] = []
  ofertasGatos: Oferta[] = []
  ofertasCaes: Oferta[] = []

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {

    this.ofertasService.getOfertas('maisVendidos').toPromise()
      .then((ofertas: Oferta[]) => { //está recebendo o array de ofertas devolvido pela promise como parametro
        this.ofertasMais = ofertas
      })

      .catch((param: any) => {
        console.log(param)
      })

    this.ofertasService.getOfertas('gatos-amam').toPromise()
      .then((ofertas: Oferta[]) => { //está recebendo o array de ofertas devolvido pela promise como parametro
        this.ofertasGatos = ofertas
      })

      .catch((param: any) => {
        console.log(param)
      })

    this.ofertasService.getOfertas('cachorros-adoram').toPromise()
      .then((ofertas: Oferta[]) => { //está recebendo o array de ofertas devolvido pela promise como parametro
        this.ofertasCaes = ofertas
      })

      .catch((param: any) => {
        console.log(param)
      })
  }

}
