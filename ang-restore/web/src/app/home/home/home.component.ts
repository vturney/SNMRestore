import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { RestorationDetail } from 'src/app/shared/model/restore-detail';
import { RestoreRestService } from 'src/app/data/restore-rest.service';
import { AddRestorationComponent } from '../add-restoration/add-restoration.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restorations : RestorationDetail[];
  expandAdd : boolean;
  @Output() jobSelected = new EventEmitter<number>();
  @ViewChild('addRestoration') addRestorationComp :AddRestorationComponent;
  mode = 'Add';

  constructor(public restoreApi:RestoreRestService){        
  }

  ngOnInit() {
    this.refresh();    
  }

  setCurrent(jobId:number){
    console.log('setting current restoration:'+jobId);
    this.jobSelected.emit(jobId);
  }

  editJob(restoration : RestorationDetail){
    this.addRestorationComp.editRestoration(restoration);
    this.mode = 'Edit';
    this.expandAdd = true;
  }

  panelClosed(){
    if(this.mode === 'Edit'){
    this.addRestorationComp.ResetForm();
    this.resetAddPanel();
    }
  }

  resetAddPanel() {
    this.refresh();
    this.expandAdd = false;
    this.mode = 'Add';
  }

  public refresh(){
    this.restoreApi.getRestorations().subscribe((data: RestorationDetail[]) => {
      this.restorations = data.map(t => t);
      //this.restoreParts.sort((a, b) => a.component.localeCompare(b.component));
    });
  }

}
