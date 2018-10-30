import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OrderedPart } from 'src/app/shared/model/restore-parts/ordered-part-item';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-add-ordered-part',
  templateUrl: './add-ordered-part.component.html',
  styleUrls: ['./add-ordered-part.component.css']
})
export class AddOrderedPartComponent implements OnInit {
  @Output() addedReqPart = new EventEmitter<OrderedPart>();

  reqPartForm = new FormGroup({
    message: new FormControl()
  });
  constructor() { }

  ngOnInit() {
  }

  addReqPart(formDirective: FormGroupDirective) {
    let reqPart = new OrderedPart();
    reqPart.log = this.reqPartForm.value.message;
      formDirective.resetForm();
      this.reqPartForm.reset();
      this.addedReqPart.emit(reqPart);    
  }

}
