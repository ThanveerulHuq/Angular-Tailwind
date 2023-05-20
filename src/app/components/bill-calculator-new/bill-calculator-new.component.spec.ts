import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCalculatorNewComponent } from './bill-calculator-new.component';

describe('BillCalculatorNewComponent', () => {
  let component: BillCalculatorNewComponent;
  let fixture: ComponentFixture<BillCalculatorNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillCalculatorNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillCalculatorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
