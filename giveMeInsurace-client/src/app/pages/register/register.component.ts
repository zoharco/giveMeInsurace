import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogRegService } from 'src/app/shared/services/log-reg.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    constructor(private fb: FormBuilder,
                private logreg: LogRegService,
                private token: TokenService,
                private router: Router,
                private auth: AuthService) { }

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            password_confirmation: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    onSubmit(){
        this.logreg.register(this.registerForm.value).subscribe(
            data => this.handleResponse(data),
            error => console.log(error)
        );
    }

    handleResponse(data) {
        this.token.handle(data.access_token);
        this.auth.changeAuthStatus(true);
        this.router.navigateByUrl('/home');
    }

    get name() {
        return this.registerForm.get('name');
    }

    get email() {
        return this.registerForm.get('email');
    }

    get password() {
        return this.registerForm.get('password');
    }
    
    get password_confirmation() {
        return this.registerForm.get('password_confirmation');
    }

}
