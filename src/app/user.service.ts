import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private defaultUrl : string = environment.apiUrl;
  private apiURI: string = environment.apiUrl + "/cars";
  private uri: string = environment.apiUrl + "/users";
  
  private userSubject: BehaviorSubject<User|null>;
  public user: Observable<User|null>;
  

  constructor(private http: HttpClient) { 
    this.userSubject = new BehaviorSubject<User|null>
    (JSON.parse(localStorage.getItem('currentUser') || '{}')) ;
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User|null {
    return this.userSubject.value;
  }

  createUser(user: User): Observable<User> {

    return this.http.post<User>(this.uri, user).
      pipe(
        catchError(this.handleError)
      );
  }

  getUsers(): Observable<User[]> {

    console.log("get Users called");

    return this.http.get<User[]>(`${this.apiURI}/users`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public login(email: string, password: string): Observable<any> {

    return this.http.post<any>(`${this.defaultUrl}/auth`, { email: email, password: password },
    {withCredentials:true}).
    pipe(map(user => {
     localStorage.setItem('currentUser', JSON.stringify(user))
     this.userSubject.next(user);
    // later we will start a timer based on the JWT expiry and
    // use a refresh token to get a new JWT in the background.
    //this.startAuthenticateTimer();
    return user;}
    ))
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.userSubject.next(null);
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
