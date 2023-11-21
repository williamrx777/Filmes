import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../models/Home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  api = 'https://wilflix.onrender.com/filmes'
  constructor(private http:HttpClient) { }

  get(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${this.api}`)
  }

}
