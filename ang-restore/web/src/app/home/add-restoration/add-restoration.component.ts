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

  @Output() saveRestoration = new EventEmitter();
  @ViewChild('formDirective') formDirective : FormGroupDirective;

  restorationForm = new FormGroup({
    job: new FormControl(),
    customer: new FormControl(),
    bikeMake: new FormControl(),
    bikeModel: new FormControl(),
    bikeYear: new FormControl(),
    bikeImage: new FormControl(),
    notes: new FormControl()
  });

  currentRestorationId;

  constructor(public restoreApi: RestoreRestService) {
  }

  ngOnInit() {
  }


  ResetForm() {
    this.currentRestorationId = undefined;
    this.formDirective.resetForm();
    this.restorationForm.reset();
  }

  _formValue() { return this.restorationForm.value; }

  editRestoration(detail: RestorationDetail) {
    console.log(this.formDirective);
    this.currentRestorationId = detail.id;
    console.log(detail);
    this._setFormFromRestorationDetail(detail);
  }

  saveRestorationForm() {
    var restoration = this._getRestorationDetailFromForm();
    console.log('save restoration');
    console.log(restoration);
    if (this.currentRestorationId) {
      restoration.id = this.currentRestorationId;
      this.restoreApi.updateRestoration(restoration).subscribe(r => {
        console.log(r);
        if (r.result === "UPDATED") {
          this.saveRestoration.emit()
        }
        this.ResetForm();
      });
    } else {
      this.restoreApi.saveRestoration(restoration).subscribe(r => {
        console.log(r);
        if (r.result == "ADDED") {
          this.saveRestoration.emit()
        }
        this.ResetForm();
      });
    }
  }

  

  _getRestorationDetailFromForm():RestorationDetail{
    let restoration = new Restoration();
    restoration.jobId = this._formValue().job;
    restoration.customer = this._formValue().customer;
    restoration.notes = this._formValue().notes;
    let bike = new Bike();
    bike.make = this._formValue().bikeMake;
    bike.model = this._formValue().bikeModel;
    bike.year = this._formValue().bikeYear;
    bike.image = this._formValue().bikeImage;
    restoration.bike = bike;
    return restoration;
  }

  _setFormFromRestorationDetail(detail:RestorationDetail){
    this.restorationForm.setValue({
      job: detail.jobId,
      customer: detail.customer,
      notes: detail.notes,
      bikeMake: detail.bike.make,
      bikeModel: detail.bike.model,
      bikeYear: detail.bike.year,
      bikeImage: detail.bike.image
    });
  }

}
