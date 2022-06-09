import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wallet} from '../../model/wallet';
import {MoneyType} from '../../model/money-type';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class MoneytypeService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<MoneyType[]> {
    return this.http.get<MoneyType[]>(`${API_URL}/wallet/moneytype`);
  }
}
