import { Component } from '@angular/core';

@Component({
  selector: 'app-bill-calculator-new',
  templateUrl: './bill-calculator-new.component.html',
  styleUrls: ['./bill-calculator-new.component.scss']
})
export class BillCalculatorNewComponent {
  units!: number;
  billAmount!: string;
  year: number = new Date().getFullYear();

  onCalculate() {
    if (!this.units) return;
    let totalAmount: number = 0;
    let currUnits = this.units;
    totalAmount += this.getAmount(currUnits - 1000, 11);
    currUnits -= currUnits > 1000 ? currUnits - 1000 : 0;
    totalAmount += this.getAmount(currUnits - 800, 10);
    currUnits -= currUnits > 800 ? currUnits - 800 : 0;
    totalAmount += this.getAmount(currUnits - 600, 9);
    currUnits -= currUnits > 600 ? currUnits - 600 : 0;
    totalAmount += this.getAmount(currUnits - 500, 8);
    currUnits -= currUnits > 500 ? currUnits - 500 : 0;
    totalAmount += this.getAmount(currUnits - 400, 6);
    currUnits -= currUnits > 400 ? currUnits - 400 : 0;
    totalAmount += this.getAmount(currUnits - 200, 4.5);
    currUnits -= currUnits > 200 ? currUnits - 200 : 0;
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
