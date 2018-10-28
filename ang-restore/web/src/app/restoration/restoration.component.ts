import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RestoreRestService } from '../data/restore-rest.service';
import { RestorePart } from '../shared/model/restore-parts/restore-part';
import { PartsListComponent } from './partslog/parts-list/parts-list.component';
import { PartAddComponent } from './partslog/part-add/part-add.component';
import { RestoreDetailComponent } from './restore-detail/restore-detail.component';

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

  jobId: number;

  constructor(public restoreApi: RestoreRestService) {
  }

  switchJob(switchJobId: number) {
    if (this.jobId !== switchJobId) {
      this.jobId = switchJobId;
      this._refreshDetail();
      this._refreshAddPart();
      this._refreshPartLogs();
    }
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

  _refreshDetail() {
    console.log('refreshing restore detail');
    // Update parts drop downs
    this.detailComp.reload(this.jobId);
  }

  ngOnInit() {
  }

}
