import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Category} from '../../model/category';
import {environment} from '../../../environments/environment';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }
  getAllCategory(id): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + `/categories/list/${id}`);
  }

  saveCategory(id, category): Observable<Category> {
    return this.http.post<Category>(API_URL + `/categories/create/${id}`, category);
  }

  findCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${API_URL}/categories/${id}`);
  }

  updateCategory(id, userId, category): Observable<Category> {
    return this.http.put<Category>(`${API_URL}/categories/edit/${id}/${userId}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${API_URL}/categories/${id}`);
  }
}
