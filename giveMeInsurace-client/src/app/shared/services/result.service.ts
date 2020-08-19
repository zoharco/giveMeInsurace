import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResultsServer } from '../models/results.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  getResults(year: number) {
      return this.http.get<IResultsServer[]>(`http://localhost:8000/api/insurancePrices/${year}`);
  }
}
