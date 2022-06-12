import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInfo} from "../../model/user-info";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(
    private http: HttpClient
  ) { }
  findByUserId(id): Observable<UserInfo> {
    return this.http.get(`${API_URL}/userInfo/findByUserId/${id}`)
  }

  updateProfile(id, data): Observable<UserInfo> {
    return this.http.put(`${API_URL}/userInfo/update/${id}`, data)
  }

  setAvatar(id, data): Observable<UserInfo> {
    return this.http.put(`${API_URL}/userInfo/avatar/${id}`, data)
  }
}

