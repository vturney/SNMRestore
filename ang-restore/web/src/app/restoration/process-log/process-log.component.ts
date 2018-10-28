import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProcessLogItem } from 'src/app/shared/model/restore-parts/process-log-item';
import { RestoreRestService } from 'src/app/data/restore-rest.service';

@Component({
  selector: 'app-process-log',
  templateUrl: './process-log.component.html',
  styleUrls: ['./process-log.component.css']
})
export class ProcessLogComponent implements OnInit {
  logItems: ProcessLogItem[];
  expandAdd: boolean;
  @Output() addProcessLog = new EventEmitter<ProcessLogItem>();
  constructor(public restoreApi: RestoreRestService) {
  }

  ngOnInit() {
  }

  public reload(jobId: number) {    
    this.restoreApi.getRestorationProcessLog(jobId).subscribe((data: ProcessLogItem[]) => {
     this.logItems = data.map(t => t);
    //this.restoreParts.sort((a, b) => a.component.localeCompare(b.component));
    });
  }

  logAdded(logItem: ProcessLogItem) {
    this.addProcessLog.emit(logItem);
    this.expandAdd = false;
  }

}
