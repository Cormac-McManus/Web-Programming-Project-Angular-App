import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarRowComponent } from './cars/car-row/car-row.component';
import { CarFormComponent } from './cars/car-form/car-form.component';
import { SelectedCarComponent } from './cars/selected-car/selected-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarService } from './car.service';
import { RegisterComponent } from './register/register.component';
import { CarUIComponent } from './car-ui/car-ui.component';
import { LoginComponent } from './login/login.component';
import { jwtInterceptorService } from './helper/jwtinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarRowComponent,
    CarFormComponent,
    SelectedCarComponent,
    RegisterComponent,
    CarUIComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: jwtInterceptorService, multi: true},
    CarService, 
    CarFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
