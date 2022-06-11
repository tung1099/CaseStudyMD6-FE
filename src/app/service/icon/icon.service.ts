import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MoneyType} from '../../model/money-type';
import {Icon} from '../../model/icon';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Icon[]> {
    return this.http.get<Icon[]>(`${API_URL}/wallet/icon`);
  }
}
