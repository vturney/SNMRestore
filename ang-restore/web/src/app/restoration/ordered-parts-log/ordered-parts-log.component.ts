import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderedPart } from 'src/app/shared/model/restore-parts/ordered-part-item';
import { RestoreRestService } from 'src/app/data/restore-rest.service';
import { OrderStateEnum } from 'src/app/shared/model/restore-parts/orderState-enum';

@Component({
  selector: 'app-ordered-parts-log',
  templateUrl: './ordered-parts-log.component.html',
  styleUrls: ['./ordered-parts-log.component.css']
})
export class OrderedPartsLogComponent implements OnInit {
  requiredParts: {state:number, part:OrderedPart}[];
  expandAdd: boolean;
  @Output() addRequiredPart = new EventEmitter<OrderedPart>();
  @Output() updateRequiredPart = new EventEmitter<OrderedPart>();
  constructor(public restoreApi: RestoreRestService) {
  }

  ngOnInit() {
  }

  public reload(jobId: number) {
    this.restoreApi.getRestorationOrderedParts(jobId).subscribe((data: OrderedPart[]) => {
      //console.log(data);
      this._groupByState(data.map(t => t));
    });
  }

  _groupByState(allParts : OrderedPart[] ){
    var p = {};
      allParts.forEach(function (a) {
        p[a.state] = p[a.state] || [];
        p[a.state].push(a);
      });
      allParts.sort();
      //var a = Object.keys(p).map(key => ({ state :OrderStateEnum[key], part: p[key] }));
      this.requiredParts = Object.keys(p).map(key => ({ state :OrderStateEnum[key], part: p[key] }));
  }

  reqPartAdded(reqPart: OrderedPart) {
       this.addRequiredPart.emit(reqPart);
    this.expandAdd = false;
  }

  reqPartUpdated(reqPart: OrderedPart, state: number) {
    reqPart.state = state;
    this.updateRequiredPart.emit(reqPart);
  }

}
