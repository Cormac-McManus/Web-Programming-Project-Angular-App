import { Injectable, ɵɵqueryRefresh } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { CarFormService } from 'src/app/car-form.service';
import { CarService } from 'src/app/car.service';
import { Icar } from 'src/app/icar';
import { CarFormComponent} from '../car-form/car-form.component';
import { CarListComponent } from '../car-list/car-list.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-car-row',
  templateUrl: './car-row.component.html',
  styleUrls: ['./car-row.component.css']
})
export class CarRowComponent implements OnInit {
  @Input() icar!: Icar;
  @Input() carFormData!: Observable<Icar>;

  constructor(private formService :CarFormService, private carFormComponent: CarFormComponent, private carListComp : CarListComponent, private carService : CarService) { }

  deleteCar() {
    this.carService.deleteCar(this.icar._id as string)

    this.Refresh();
  }

  Refresh(){
    this.carService.getCars().subscribe({
      next: (value: Icar[] )=> this.carListComp.carList = value,
      complete: () => console.log(this.carListComp.carList),
      error: (mess) => this.carListComp.message = mess
    })
  }

  updateCar(){
    this.carService.updateCar(this.icar._id as string, this.formService.getUpdateData());
    console.log(this.icar._id)
    console.log("The data to be used in update : " + this.formService.getUpdateData())

    this.Refresh();
  }

  ngOnInit(): void {
  }

}