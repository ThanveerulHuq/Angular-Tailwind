import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillCalculatorComponent } from './components/bill-calculator/bill-calculator.component';
import { BillCalculatorNewComponent } from './components/bill-calculator-new/bill-calculator-new.component';

@NgModule({
  declarations: [
    AppComponent,
    BillCalculatorComponent,
    BillCalculatorNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
