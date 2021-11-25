import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarRowComponent } from './cars/car-row/car-row.component';
import { CarFormComponent } from './cars/car-form/car-form.component';
import { SelectedCarComponent } from './cars/selected-car/selected-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from './car.service';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarRowComponent,
    CarFormComponent,
    SelectedCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CarService, CarFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
