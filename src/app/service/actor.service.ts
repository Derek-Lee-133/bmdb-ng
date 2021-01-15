import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../model/actor.class';

const URL= 'http://localhost:8080/actors'
@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

   // service functions
  // getAll movies

  getAll(): Observable<Actor[]> {
    return this.http.get(URL+'/') as Observable<Actor[]>;
  }
  getById(id): Observable<Actor> {
    return this.http.get(URL + '/' + id) as Observable<Actor>;
  }
   // actor create
   create(actor:Actor): Observable<Actor> {
    return this.http.post(URL+'/',actor) as Observable<Actor>;
  }
   // update actor
   update(actor: Actor): Observable<Actor> {
    return this.http.put(URL + '/', actor) as Observable<Actor>;
  }
  // delete actor
  delete(id): Observable<Actor> {
    return this.http.delete(URL + '/' + id) as Observable<Actor>;
  }

}
