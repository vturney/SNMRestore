import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcessLogComponent } from './add-process-log.component';

describe('AddProcessLogComponent', () => {
  let component: AddProcessLogComponent;
  let fixture: ComponentFixture<AddProcessLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProcessLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcessLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
