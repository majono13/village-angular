import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Oferta } from './shared/oferta.model'


@Injectable()
export class OfertasService {

  constructor(private http: HttpClient) { }

  getOfertas(tipo: string): any {
    return this.http.get('http://localhost:3000/produtos?tipo=' + tipo)//esse endereço vem da execução do servido através do comando: json-server --watch banco-de-dados.json
  }
}
