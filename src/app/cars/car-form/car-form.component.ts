import { Injectable, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Icar } from 'src/app/icar';
import { JsonpClientBackend } from '@angular/common/http';
import { CarService } from 'src/app/car.service';
import { Observable, pipe } from 'rxjs';
import { findIndex } from 'rxjs/operators';
import { CarListComponent } from '../car-list/car-list.component';
import { CarFormService } from 'src/app/car-form.service';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  carForm = this.fb.group({
    make: ['Sample Make', [Validators.required, Validators.minLength(1)]],
    model: ['Sample Model', [Validators.required, Validators.minLength(1)]],
    year: [2009, [Validators.required, Validators.min(1880)]],
    fuel: ['Sample Fuel', [Validators.required, Validators.minLength(1)]],
    engine_size: [1.4, [Validators.required, Validators.minLength(1)]],
    transmission: ['Sample Transmission', [Validators.required, Validators.minLength(1)]],
    drivetrain: ['FWD', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    body: ['Sample Body', [Validators.required, Validators.minLength(1)]],
    imagelink: ['-', [Validators.required, Validators.minLength(1)]]
  });


  public constructor( private carformService: CarFormService, private carListComp : CarListComponent, private carService : CarService, private fb:FormBuilder) {}

  public carToAdd : Observable<Icar> = this.carForm.value;
  

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.carToAdd = this.carForm.value;
    console.log("forms submitted:" + JSON.stringify(this.carToAdd))
    this.carService.addCar(this.carToAdd)
    this.carService.getCars().subscribe({
      next: (value: Icar[] )=> this.carListComp.carList = value,
      complete: () => console.log(this.carListComp.carList),
      error: (mess) => this.carListComp.message = mess
    })
  }

  sendUpdateData()
  {
    this.carformService.setUpdateData(this.carForm.value)
  }
  

  get make() {
    return this.carForm.get('make');
  }

  get model() {
    return this.carForm.get('model');
  }

  get year() {
    return this.carForm.get('year');
  }

  get fuel() {
    return this.carForm.get('fuel');
  }

  get engine_size() {
    return this.carForm.get('engine_size');
  }

  get transmission() {
    return this.carForm.get('model');
  }
  get drivetrain() {
    return this.carForm.get('model');
  }
  get body() {
    return this.carForm.get('model');
  }

  get imagelink() {
    return this.carForm.get('model');
  }
}