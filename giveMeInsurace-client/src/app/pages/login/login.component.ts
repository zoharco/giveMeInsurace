import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LogRegService } from 'src/app/shared/services/log-reg.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    error = null;

    constructor(private fb: FormBuilder,
                private logreg: LogRegService,
                private token: TokenService,
                private router: Router,
                private auth: AuthService) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: this.fb.control('', [Validators.required, Validators.email]),
            password: this.fb.control('', [Validators.required, Validators.minLength(8)])
        });
    }

    onSubmit(){
        this.logreg.login(this.loginForm.value).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }
    
    handleResponse(data) {
        this.token.handle(data.access_token);
        this.auth.changeAuthStatus(true);
        this.router.navigateByUrl('/home');
    }

    handleError(error) {
        this.error = error.error.error;
    }

}
