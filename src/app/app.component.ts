import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  value1: number = 55;
  value2: number = 123;
  value3: number = 23;
  
  options: Options = {
    floor: 0,
    ceil: 255
  };
}
