import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDdComponent } from './auto-dd.component';

describe('AutoDdComponent', () => {
  let component: AutoDdComponent;
  let fixture: ComponentFixture<AutoDdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoDdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
