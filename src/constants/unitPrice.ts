/*totalAmount += this.getAmount(currUnits - 1000, 11);
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
totalAmount += this.getAmount(currUnits - 100, 2.25);*/

export const UNIT_PRICE = [
  {max: Number.MAX_VALUE, min: 1000, price: 11},
  {max: 1000, min: 800, price: 10},
  {max: 800, min: 600, price: 9},
  {max: 600, min: 500, price: 8},
  {max: 500, min: 400, price: 6},
  {max: 400, min: 200, price: 4.5},
  {max: 200, min: 100, price: 2.25}
]
