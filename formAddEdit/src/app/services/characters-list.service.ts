import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People, PeopleResponse } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharactersPage(page: number): Observable<PeopleResponse>{
    return this.http.get<PeopleResponse>(`${environment.apiBaseUrl}/people?page=${page}`)
  }

  getCharacters(id : string): Observable<People>{
    return this.http.get<People>(`${environment.apiBaseUrl}/people/${id}`)
  }
}