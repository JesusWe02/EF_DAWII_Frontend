import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8080/api/user';
const register = 'http://localhost:8080/auth/register';
const update = 'http://localhost:8080/auth/updateUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }
  read(id: number): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data: User): Observable<any> {
    return this.httpClient.post(register, data);
  }

  update(id: number, data: User): Observable<any> {
    return this.httpClient.put(`${update}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  searchByName(name: string): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
  }
}
