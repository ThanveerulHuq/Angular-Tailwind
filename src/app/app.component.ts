import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-v12-practice';
  units!: number;
  billAmount!: number | string;

  onCalculate() {
    if (!this.units) return;
    if (this.units <= 100) {
      this.billAmount = 0;
    } else if (this.units > 100 && this.units <= 200) {
      const calcAmnt = (this.units - 100) * 1.5;
      this.billAmount = calcAmnt + 20;
    } else if (this.units > 200 && this.units <= 500) {
      const calcAmnt = (this.units - 200) * 3;
      this.billAmount = 230 + calcAmnt;
    } else {
      this.billAmount = this.units * 6.6 - 1520;
    }
    this.billAmount = this.billAmount.toFixed(2);
  }
}
