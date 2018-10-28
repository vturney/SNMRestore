import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestorationComponent } from './add-restoration.component';

describe('AddRestorationComponent', () => {
  let component: AddRestorationComponent;
  let fixture: ComponentFixture<AddRestorationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRestorationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
