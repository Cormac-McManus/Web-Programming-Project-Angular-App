import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Icar } from './icar';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarFormService {
  constructor() { }

  private carFormData : Observable<Icar>;

  setUpdateData(dataToAdd : Observable<Icar>){
    this.carFormData = dataToAdd;
  }

  getUpdateData():Observable<Icar>{
    return this.carFormData;
  }
}
