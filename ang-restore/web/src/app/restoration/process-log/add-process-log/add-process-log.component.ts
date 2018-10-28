import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
import { ProcessLogItem } from 'src/app/shared/model/restore-parts/process-log-item';

@Component({
  selector: 'app-add-process-log',
  templateUrl: './add-process-log.component.html',
  styleUrls: ['./add-process-log.component.css']
})
export class AddProcessLogComponent implements OnInit {
  @Output() addedLog = new EventEmitter<ProcessLogItem>();

  logForm = new FormGroup({
    message: new FormControl()
  });
  constructor() { }

  ngOnInit() {
  }

  addLog(formDirective: FormGroupDirective) {
    let logItem = new ProcessLogItem();
    logItem.log = this.logForm.value.message;
      formDirective.resetForm();
      this.logForm.reset();
      this.addedLog.emit(logItem);    
  }
}
