import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICompany } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  constructor(private http:HttpClient) { }

  getCompanyDetails() {
    return this.http.get<ICompany[]>('assets/data/data.json');
  }
}
