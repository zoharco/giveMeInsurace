import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICar } from '../models/car.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DetailsCarService {
    private notify = new Subject<ICar>();
    notifyObservable = this.notify.asObservable();

    constructor(private http: HttpClient) { }

    public notifyCar(car: ICar) {
        if (car) {
            this.notify.next(car);
        }
    }

    public getCar(carNumber: string) {
        return this.http.get<ICar>(`http://localhost:8000/api/car/${carNumber}`);
    }
}
