import { Component, OnInit, Input } from '@angular/core';
import { RestorationDetail } from 'src/app/shared/model/restore-detail';
import { RestoreRestService } from 'src/app/data/restore-rest.service';

@Component({
  selector: 'app-restore-detail',
  templateUrl: './restore-detail.component.html',
  styleUrls: ['./restore-detail.component.css']
})
export class RestoreDetailComponent implements OnInit {
  restoration: RestorationDetail;
  status: string;

  constructor(public restoreApi: RestoreRestService) {
  }

  ngOnInit() {
    this.reload(undefined); // no selection initially
  }

  reload(jobId: number) {
    if (!jobId) {
      this.status = 'No Restoration Job Selected';
    } else {
      this.status = undefined;
      this.restoreApi.getRestorationDetail(jobId).subscribe(
        rd => { this.restoration = rd; },
        error => { this.status = error.error; }
      );
    }
  }

}
