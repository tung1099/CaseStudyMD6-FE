import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserToken} from '../../model/user-token';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../../model/user';
import {Repass} from '../../model/repass';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class AuthencicationService {

  private currentUserSubject: BehaviorSubject<UserToken>;
  public currentUser: Observable<UserToken>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${API_URL}/login`, {username, password})
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }
  logout() {
    localStorage.clear();
    this.currentUserSubject.next(null);
  }
  get currentUserValue() {
    return this.currentUserSubject.value;
  }

  register(singUpForm): Observable<User> {
    return this.http.post(`${API_URL}/register`, singUpForm);
  }
  changePassword(currentUserId: number, changePassword: Repass): Observable<User> {
    return this.http.post<User>(`${API_URL}/changePassword/${currentUserId}`, changePassword);
  }

  checkUserName(username): Observable<boolean> {
    return this.http.get<boolean>(`${API_URL}/username/${username}`);
  }
}
