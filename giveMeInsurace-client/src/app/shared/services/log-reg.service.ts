import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LogRegService {


    constructor(private http: HttpClient) { }
    private baseUrl = 'http://localhost:8000/api';

    login(data) {
        return this.http.post(`${this.baseUrl}/login`, data);
    }
    
    register(data) {
        return this.http.post(`${this.baseUrl}/register`, data);
    }
}
