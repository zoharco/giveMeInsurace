import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { ConfirmEqualValidatorDirective } from './shared/directives/confirm-equal-validation.directive';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';
import { CarDetailsComponent } from './shared/components/car-details/car-details.component';
import { RadioButtonControlComponent } from './shared/controls/radio-button-control/radio-button-control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputControlComponent } from './shared/controls/input-control/input-control.component';

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmEqualValidatorDirective,
    HomeComponent,
    ResultComponent,
    CarDetailsComponent,
    RadioButtonControlComponent,
    InputControlComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
  ],
  providers: [
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
