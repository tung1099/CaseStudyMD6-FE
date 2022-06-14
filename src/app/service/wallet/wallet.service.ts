import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wallet} from '../../model/wallet';
import {MoneyType} from '../../model/money-type';
import {InOut} from "../../model/inOut";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(`${API_URL}/wallet/list`);
  }
  getAllByUserId(id): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(`${API_URL}/wallet/getWalletByUserId/${id}`);
  }
  create(id, data): Observable<Wallet> {
    return this.http.post<Wallet>(`${API_URL}/wallet/createWallet/${id}`, data);
  }
  edit(id, idUser, data): Observable<Wallet> {
    return this.http.put<Wallet>(`${API_URL}/wallet/editWallet/${id}/${idUser}`, data);
  }
  delete(id): Observable<Wallet> {
    return this.http.delete<Wallet>(`${API_URL}/wallet/${id}`);
  }
  getById(id): Observable<Wallet> {
    return this.http.get<Wallet>(`${API_URL}/wallet/${id}`);
  }
  getAllType(): Observable<MoneyType[]> {
    return this.http.get<MoneyType[]>(`${API_URL}/wallet/moneytype`);
  }
  getInOut(idWallet, month, year): Observable<InOut> {
    // @ts-ignore
    return this.http.post<InOut>(`${API_URL}/wallet/inOut/${idWallet}?month=${month}&year=${year}`);
  }
}
