import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-v12-practice';
  units!: number;
  billAmount!: number;

  onCalculate() {
    

  }
}
