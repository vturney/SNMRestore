import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Restoration } from 'src/app/shared/model/restoration';
import { RestorationDetail } from 'src/app/shared/model/restore-detail';
import { RestoreRestService } from 'src/app/data/restore-rest.service';
import { Bike } from 'src/app/shared/model/bike';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-add-restoration',
  templateUrl: './add-restoration.component.html',
  styleUrls: ['./add-restoration.component.css']
})
export class AddRestorationComponent implements OnInit {

  @Output() addedRestoration = new EventEmitter();

  restorationForm = new FormGroup({
    job: new FormControl(),
    customer: new FormControl(),
    bikeMake: new FormControl(),
    bikeModel: new FormControl(),
    bikeYear: new FormControl(),
    bikeImage: new FormControl(),
    notes: new FormControl()
  });

  constructor(public restoreApi: RestoreRestService) {
  }

  ngOnInit() {
  }

  _form() { return this.restorationForm.value; }

  saveRestoration(formDirective: FormGroupDirective) {
    let restoration = new Restoration();
    restoration.jobId = this._form().job;
    restoration.customer = this._form().customer;
    restoration.notes = this._form().notes;
    let bike = new Bike();
    bike.make = this._form().bikeMake;
    bike.model = this._form().bikeModel;
    bike.year = this._form().bikeYear;
    bike.image = this._form().bikeImage;
    restoration.bike = bike;
    console.log('add restoration');
    console.log(restoration);
    this.restoreApi.saveRestoration(restoration).subscribe(r => {
      console.log(r);
      formDirective.resetForm();
      this.restorationForm.reset();
      if (r.result === "UPDATED" || r.result == "ADDED") {
         this.addedRestoration.emit()
      }
    });
  }

}
