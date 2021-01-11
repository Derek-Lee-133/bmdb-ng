import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Credit} from '../../app/model/credit.class'
import {HttpClient} from '@angular/common/http'
const URL='http://localhost:8080/credits'
@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Credit[]> {
    return this.http.get(URL+'/') as Observable<Credit[]>;
  }

}
