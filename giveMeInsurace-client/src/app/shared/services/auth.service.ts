import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isLoggedIn = new BehaviorSubject<boolean>(this.token.isLoggedIn());
    authStatus = this.isLoggedIn.asObservable();

    
    constructor(private token: TokenService) { }
    
    changeAuthStatus(value: boolean) {
        this.isLoggedIn.next(value);
    }
    
}
