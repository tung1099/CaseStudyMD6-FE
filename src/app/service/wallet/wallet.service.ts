import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Wallet} from '../../model/wallet';
import {Observable} from 'rxjs';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(`${API_URL}/wallet/list`);
  }
}
