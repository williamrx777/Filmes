import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../models/Home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  api = 'https://45858a35-015d-4fd9-b0ac-94c8c115d82e-00-2t7im9d0i248n.kirk.replit.dev/filmes/filmes-lista/'
  constructor(private http:HttpClient) { }

  get(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${this.api}`)
  }

}
