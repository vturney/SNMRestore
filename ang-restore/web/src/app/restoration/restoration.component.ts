import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RestoreRestService } from '../data/restore-rest.service';
import { RestorePart } from '../shared/model/restore-parts/restore-part';
import { PartsListComponent } from './partslog/parts-list/parts-list.component';
import { PartAddComponent } from './partslog/part-add/part-add.component';
import { RestoreDetailComponent } from './restore-detail/restore-detail.component';
import { ProcessLogItem } from '../shared/model/restore-parts/process-log-item';
import { AddProcessLogComponent } from './process-log/add-process-log/add-process-log.component';
import { ProcessLogComponent } from './process-log/process-log.component';
import { OrderedPartsLogComponent } from './ordered-parts-log/ordered-parts-log.component';
import { OrderedPart } from '../shared/model/restore-parts/ordered-part-item';

@Component({
  selector: 'app-restoration',
  templateUrl: './restoration.component.html',
  styleUrls: ['./restoration.component.css']
})
export class RestorationComponent implements OnInit {

  @ViewChild('chassisPartList') chassisPartsLog: PartsListComponent;
  @ViewChild('enginePartsList') enginePartsLog: PartsListComponent;
  @ViewChild('addPart') addPartComp: PartAddComponent;
  @ViewChild('restoreDetail') detailComp: RestoreDetailComponent;
  @ViewChild('processLog') processLogComp : ProcessLogComponent;
  @ViewChild('reqPartLog') reqPartLogComp : OrderedPartsLogComponent;

  jobId: number;

  constructor(public restoreApi: RestoreRestService) {
  }

  switchJob(switchJobId: number) {
    if (this.jobId !== switchJobId) {
      this.jobId = switchJobId;
      this._refreshDetail();
      this._refreshAddPart();
      this._refreshPartLogs();
      this._refreshProcessLog();
      this._refreshRequiredPartsLog();
    }
  }

  saveLogItem(logItem:ProcessLogItem){
  this.restoreApi.saveRestoreProcessLog(this.jobId, logItem).subscribe(r => {
    console.log(r);
    if (r.result === "ADDED") {
      this._refreshProcessLog();
    } 
  });
}

saveRequiredPart(reqPart:OrderedPart){
    console.log('saving req part');
    console.log(reqPart);
    this.restoreApi.saveRestoreOrderedPart(this.jobId, reqPart).subscribe(r => {
      console.log(r);
      if (r.result === "ADDED") {
        this._refreshRequiredPartsLog();
      } 
    });
}

updateRequiredPart(reqPart:OrderedPart){
  console.log('updating req part');
  console.log(reqPart);
  this.restoreApi.updateRestoreOrderedPart(this.jobId, reqPart).subscribe(r => {
    console.log(r);
    if (r.result === "UPDATED") {
      this._refreshRequiredPartsLog();
    } 
  });
}

  saveRestorePart(part: RestorePart) {
    this.restoreApi.saveRestorePart(this.jobId, part).subscribe(r => {
      console.log(r);
      if (r.result === "UPDATED") {
        this._refreshPartLogs();
      } else if (r.result == "ADDED") {
        this._refreshAddPart();
        this._refreshPartLogs();
      }
    });
  }

  _refreshAddPart() {
    console.log('refreshing parts add');
    // Update parts drop downs
    this.addPartComp.refreshData();
  }

  _refreshPartLogs() {
    console.log('refreshing parts lists');
    this.chassisPartsLog.reload(this.jobId);
    this.enginePartsLog.reload(this.jobId);
  }

  _refreshProcessLog(){
    console.log('refreshing processLog');
    this.processLogComp.reload(this.jobId);
  }

  _refreshRequiredPartsLog(){
    console.log('refreshing required parts log');
    this.reqPartLogComp.reload(this.jobId);
  }

  _refreshDetail() {
    console.log('refreshing restore detail');
    // Update parts drop downs
    this.detailComp.reload(this.jobId);
  }

  ngOnInit() {
  }

}
