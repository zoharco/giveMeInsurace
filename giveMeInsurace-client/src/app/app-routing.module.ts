import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { BeforeLoginService } from './shared/services/before-login.service';
import { AfterLoginService } from './shared/services/after-login.service';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { 
        path: 'login', 
        component: LoginComponent,
        canActivate: [ BeforeLoginService ]
     },
    { 
        path: 'register', 
        component: RegisterComponent,
        canActivate: [ BeforeLoginService ]
    },
    { 
        path: 'home', 
        component: HomeComponent,
        canActivate: [ AfterLoginService ]
    },

];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
