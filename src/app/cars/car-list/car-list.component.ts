import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/car.service';
import { Icar } from 'src/app/icar';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList: Icar[] = [];
  message: string = "";

  currentCar! : Icar;

  constructor(private CarService: CarService) { }

  ngOnInit(): void {
    this.CarService.getCars().subscribe({
      next: (value: Icar[] )=> this.carList = value,
      complete: () => console.log('car service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked (icar: Icar): void {
    this.currentCar = icar;
  }

}
