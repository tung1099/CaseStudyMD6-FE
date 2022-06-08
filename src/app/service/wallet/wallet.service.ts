import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Wallet} from '../../model/wallet';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class WalletService {

  wallets: Wallet[] = [];
  constructor(private http: HttpClient) { }
  getAllWallet(): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(`${API_URL}/wallet`);
  }
}
