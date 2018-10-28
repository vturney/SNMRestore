import { Component, ViewChild } from '@angular/core';
import {RestoreRestService } from 'src/app/data/restore-rest.service';
import { RestorationComponent } from './restoration/restoration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  @ViewChild('currentRestoration') currentRestoration : RestorationComponent;;

  constructor(public restoreApi:RestoreRestService){       
  }

  title = 'St Neots Motorcyles GP Restorations';   
  selectedTab: number;

  ngOnInit() {
    //this.currentRestoration.switchJob(25622);
  }  

  onJobSelected(jobId:number){
    console.log('switching to job:'+jobId);
    this.currentRestoration.switchJob(jobId);    
    this.selectedTab = 1;    
  }
}
