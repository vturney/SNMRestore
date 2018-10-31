import { Component, OnInit, Input } from '@angular/core';
import { RestorePart } from 'src/app/shared/model/restore-parts/restore-part';
import { RestoreRestService } from 'src/app/data/restore-rest.service';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.css']
})
export class PartsListComponent implements OnInit {
  @Input() componentType: number;

  groupedByParts: { component: string, part: RestorePart }[];
  _jobId: number;

  displayedColumns: string[] = ['part', 'colour', 'sent', 'quantity', 'action'];

  constructor(public restoreApi: RestoreRestService) {
  }

  ngOnInit() {
  }

  public reload(jobId: number) {
    console.log('reloading parts list. job :' + jobId + ', type:' + this.componentType);
    if (jobId && this.componentType) {
      this.restoreApi.getRestorationParts(jobId, this.componentType).subscribe((data: RestorePart[]) => {
        var restoreParts = data.map(t => t);
        restoreParts.sort((a, b) => a.component.localeCompare(b.component));
        this._groupByComponent(restoreParts);
        this._jobId = jobId;
      });
    }
  }

  deletePartRow(part: RestorePart) {
    //console.log(part);
    this.restoreApi.deleteRestorePart(this._jobId, part._id.toString()).subscribe(r => {
      if (r.result === "UPDATED") {
        this.reload(this._jobId);
      }
    }
    );
  }

  _groupByComponent(allParts: RestorePart[]) {
    var p = {};
    allParts.forEach(function (a) {
      p[a.component] = p[a.component] || [];
      p[a.component].push(a);
    });
    allParts.sort();
    this.groupedByParts = Object.keys(p).map(key => ({ component: key, part: p[key] }));
  }

}
