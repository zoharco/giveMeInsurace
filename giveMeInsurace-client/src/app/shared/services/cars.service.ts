import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICar } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  getCar(carNumber: string){
      return this.http.get<ICar>(`http://localhost:8000/api/car/${carNumber}`);
  }
}
