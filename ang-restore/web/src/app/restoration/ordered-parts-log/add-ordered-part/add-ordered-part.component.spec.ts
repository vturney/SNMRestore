import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderedPartComponent } from './add-ordered-part.component';

describe('AddOrderedPartComponent', () => {
  let component: AddOrderedPartComponent;
  let fixture: ComponentFixture<AddOrderedPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrderedPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderedPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
