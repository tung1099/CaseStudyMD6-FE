import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../model/category';
import {AddMoney} from '../../model/addMoney';
import {Transaction} from '../../model/transaction';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class AddMoneyService {

  constructor(private http: HttpClient) { }

  addMoney(id, addMoney): Observable<AddMoney> {
    return this.http.post<AddMoney>(API_URL + `/addMoney/${id}`, addMoney);
  }

  getAllWallet(): Observable<AddMoney[]> {
    return this.http.get<AddMoney[]>(API_URL + '/wallet/list');
  }
  getAddMoneyInTimeByIdWallet(data): Observable<Transaction[]> {
    return this.http.post<Transaction[]>(`${API_URL}/addMoney/addMoneyInTimeByIdWallet`, data);
  }
}
