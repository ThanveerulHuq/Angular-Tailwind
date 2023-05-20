import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillCalculatorNewComponent } from './components/bill-calculator-new/bill-calculator-new.component';
import { BillCalculatorComponent } from './components/bill-calculator/bill-calculator.component';

const routes: Routes = [{path:'', component:BillCalculatorNewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
