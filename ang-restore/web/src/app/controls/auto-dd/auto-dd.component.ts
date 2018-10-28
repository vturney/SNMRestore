import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, filter, toArray, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-auto-dd',
  templateUrl: './auto-dd.component.html',
  styleUrls: ['./auto-dd.component.css']
})
export class AutoDdComponent implements OnInit {
  _options: string[];
  @Input()
  set options(options: string[]) {
    if (options) {
      this._options = options;
      this.filteredOptions = this.form.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );

    }
  }

  @Input() watermark: string;
  @Input()

  set disabled(disabled: boolean) { this._disableField(disabled); }


  @Output() blur = new EventEmitter();
  form = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit() {

  }

  onblur() {
    this.blur.emit()
  }


  private _disableField(disable: boolean) {
    console.log('auto-dd disable set:' + disable);
    if (disable === true) { this.form.disable(); }
    else {
      this.form.enable();
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (this._options) {
      return this._options.filter(option => option.toLowerCase().includes(filterValue));
    }
  }
}



