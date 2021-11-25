import { Component, Input, OnInit } from '@angular/core';
import { Icar } from 'src/app/icar';

@Component({
  selector: 'app-selected-car',
  templateUrl: './selected-car.component.html',
  styleUrls: ['./selected-car.component.css']
})
export class SelectedCarComponent implements OnInit {
  @Input() icar! : Icar;

  constructor() { }

  ngOnInit(): void {
  }

}
