import { Injectable } from '@angular/core';
import { Icar } from './icar';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'
import { CarFormComponent } from './cars/car-form/car-form.component';

@Injectable({
  providedIn: 'root'
})



export class CarService {

  private CarDataUrl = "http://localhost:3000/cars/";

  constructor(private http: HttpClient) {
    
  }

  /* Get cars */
  getCars(): Observable<Icar[]>{

    console.log("getCars called");
  
    return this.http.get<Icar[]>(this.CarDataUrl)
    .pipe(
      catchError(this.handleError)
    )
  }


  /* Post cars */

  addCar(carToPost : Observable<Icar>) {
    console.log("addCar called");
    console.table(carToPost);

    return this.http.post<Icar>(this.CarDataUrl, carToPost)
    .pipe(
      catchError(this.handleError)
    )
    .subscribe((result) => console.log(result));
  }
  


  /* Delete cars */

  deleteCar(carID: string) {
    console.log("deleteCar called")
    return this.http.delete(this.CarDataUrl + "/" + carID)
    .pipe(catchError(this.handleError)
    )
    .subscribe((result) => console.log(result));
  }


  /* Update cars */
  updateCar(carID: string, updateData: Observable<Icar>){
    console.log("subscribing to update " + carID);
    let url: string = this.CarDataUrl + '/' + carID;
    

    return this.http.put<Icar>(url, updateData)
    .pipe(catchError(this.handleError)
    )
    .subscribe((result) => console.log(result));
  }




  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  

}

