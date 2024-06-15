import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UNIT_PRICE} from "../../../constants/unitPrice";

export interface RangeAmount {
  range: string;
  amount: number;
  costPerUnit: number;
}

@Component({
  selector: 'app-bill-calculator-new',
  templateUrl: './bill-calculator-new.component.html',
  styleUrls: ['./bill-calculator-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BillCalculatorNewComponent {
  units!: number;
  billAmount!: string;
  year: number = new Date().getFullYear();
  rangeAmounts: RangeAmount[] = [];

  onCalculateNew() {
    if (!this.units) return;
    let currUnits = this.units;

    this.rangeAmounts = UNIT_PRICE
      .filter(unitPrice => currUnits > unitPrice.min)
      .map((unitPrice) => {
        const amount = this.getAmount(currUnits - unitPrice.min, unitPrice.price);
        currUnits -= currUnits - unitPrice.min;
        return {
          range: unitPrice.max === Number.MAX_VALUE ? `${unitPrice.min}+` : `${unitPrice.min}-${unitPrice.max}`,
          amount,
          costPerUnit: unitPrice.price
        }
      })

    let totalAmount = this.rangeAmounts
      .reduce((prev, curr) => prev + curr.amount, 0);

    totalAmount = this.units > 500 ? totalAmount + 225 : totalAmount;
    this.billAmount = totalAmount.toFixed(2);

  }

  private getAmount(units: number, amount: number): number {
    if (units <= 0) return 0;
    return units * amount;
  }

}
