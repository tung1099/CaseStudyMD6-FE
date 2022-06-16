import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Noti} from "../../model/noti";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  constructor(
    private http: HttpClient
  ) { }

  showAllNotificationByUserId(id): Observable<Noti[]> {
    return this.http.get<Noti[]>(`${API_URL}/notification/list/${id}`)
  }
}
