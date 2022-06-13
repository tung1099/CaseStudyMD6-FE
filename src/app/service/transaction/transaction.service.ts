import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transaction} from '../../model/transaction';
import {TransactionToday} from '../../model/transactionToday';
import {SumTransactionTodayByIdWallet} from '../../model/sumTransactiontodayByIdWallet';




const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  create(id, data): Observable<Transaction> {
    return this.http.post(`${API_URL}/transaction/create/${id}`, data);
  }
  getAll(idUser): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${API_URL}/transaction/listTransaction/${idUser}`);
  }
  update(id, idUser, data): Observable<Transaction> {
    return this.http.put(`${API_URL}/transaction/editTransaction/${id}/${idUser}`, data);
  }
  findById(id): Observable<Transaction> {
    return this.http.get<Transaction>(`${API_URL}/transaction/findTransactionById/${id}`);
  }
  delete(id): Observable<Transaction> {
    return this.http.delete(`${API_URL}/transaction/deleteTransaction/${id}`);
  }
  getAllTransactionToday(idUser): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${API_URL}/transaction/transactionInDay/${idUser}`);
  }
  getAllTransactionTodayByWallet(id): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${API_URL}/transaction/transactionInDayByIdWallet/${id}`);
  }
  getSumTransactionTodayByWallet(id): Observable<SumTransactionTodayByIdWallet[]> {
    return this.http.get<SumTransactionTodayByIdWallet[]>(`${API_URL}/transaction/sumTransactionInDay/${id}`);
  }
  getAllTransactionByWallet(id): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${API_URL}/transaction/allTransactionByIdWallet/${id}`);
  }
}
