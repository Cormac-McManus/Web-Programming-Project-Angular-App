import { Component} from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Car-Data-Angular-App';
}