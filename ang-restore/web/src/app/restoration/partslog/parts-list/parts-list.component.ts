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
  restoreParts: RestorePart[];

  displayedColumns: string[] = ['component', 'part', 'colour', 'sent', 'quantity'];

  constructor(public restoreApi: RestoreRestService) {
  }

  ngOnInit() {
  }

  public reload(jobId: number) {
    console.log('reloading parts list. job :' + jobId + ', type:' + this.componentType);
    if (jobId && this.componentType) {
      this.restoreApi.getRestorationParts(jobId, this.componentType).subscribe((data: RestorePart[]) => {
        this.restoreParts = data.map(t => t);
        this.restoreParts.sort((a, b) => a.component.localeCompare(b.component));
      });
    }
  }

}
