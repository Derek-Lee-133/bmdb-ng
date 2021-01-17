import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Credit} from '../../app/model/credit.class'
import {HttpClient} from '@angular/common/http'
const URL = 'http://localhost:8080/credits';
@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) { }

  // service functions
  // getAll credits
  getAll(): Observable<Credit[]> {
    return this.http.get(URL+'/') as Observable<Credit[]>;
  }


  // get a credit by id
  getById(id): Observable<Credit> {
    return this.http.get(URL + '/' + id) as Observable<Credit>;
  }

  // create credit
  create(credit: Credit): Observable<Credit> {
    return this.http.post(URL + '/', credit) as Observable<Credit>;
  }

  // update credit
  update(credit: Credit): Observable<Credit> {
    return this.http.put(URL + '/', credit) as Observable<Credit>;
  }

  // delete credit
  delete(id): Observable<Credit> {
    return this.http.delete(URL + '/'+id) as Observable<Credit>;
  }
}