// src/app/feature/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    console.log('Fetching data from:', this.apiUrl);
    return this.http.get(this.apiUrl);
  }
}
