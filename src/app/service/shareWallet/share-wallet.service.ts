import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShareWallet} from "../../model/share-wallet";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ShareWalletService {

  constructor(
    private http: HttpClient
  ) { }

  addNewShare(walletId: number, username:string): Observable<ShareWallet> {
     // @ts-ignore
    return this.http.post<ShareWallet>(`${API_URL}/share/create/${walletId}?username=${username}`)
  }

  getAllShare(userId): Observable<ShareWallet[]> {
    return this.http.get<ShareWallet[]>(`${API_URL}/share/list/${userId}`)
  }

  stopShare(walletId) : Observable<any> {
    return this.http.delete(`${API_URL}/share/delete/${walletId}`)
  }
}
