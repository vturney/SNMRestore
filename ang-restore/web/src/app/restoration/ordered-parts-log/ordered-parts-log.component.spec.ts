import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedPartsLogComponent } from './ordered-parts-log.component';

describe('OrderedPartsLogComponent', () => {
  let component: OrderedPartsLogComponent;
  let fixture: ComponentFixture<OrderedPartsLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderedPartsLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedPartsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
