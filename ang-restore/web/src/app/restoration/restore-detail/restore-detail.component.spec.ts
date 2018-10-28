import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreDetailComponent } from './restore-detail.component';

describe('RestoreDetailComponent', () => {
  let component: RestoreDetailComponent;
  let fixture: ComponentFixture<RestoreDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoreDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
