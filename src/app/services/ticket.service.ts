import { Ticket } from './../model/ticket';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8080/api/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private httpClient: HttpClient) {}
  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }
  read(id: number): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data: Ticket): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(id: number, data: Ticket): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  searchByTitle(title: string): Observable<any> {
    return this.httpClient.get(`${baseURL}?title=${title}`);
  }
}
