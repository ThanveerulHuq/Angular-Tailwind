import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-v12-practice';
  units!: number;
  billAmount!: string;

  onCalculate() {
    if (!this.units) return;
    let totalAmount: number = 0;
    let currUnits = this.units;
    totalAmount += this.getAmount(currUnits - 1000, 11);
    currUnits -= currUnits - 1000;
    totalAmount += this.getAmount(currUnits - 800, 10);
    currUnits -= currUnits - 800;
    totalAmount += this.getAmount(currUnits - 600, 9);
    currUnits -= currUnits - 600;
    totalAmount += this.getAmount(currUnits - 500, 8);
    currUnits -= currUnits - 500;
    totalAmount += this.getAmount(currUnits - 400, 6);
    currUnits -= currUnits - 400;
    totalAmount += this.getAmount(currUnits - 200, 4.5);
    currUnits -= currUnits - 200;
    totalAmount += this.getAmount(currUnits - 100, 2.25);
    if (this.units > 500) {
      totalAmount += 225;
    }
    this.billAmount = totalAmount.toFixed(2);
  }

  private getAmount(units: number, amount: number): number {
    if (units <= 0) return 0;
    return units * amount;
  }
}
