import { Component, OnInit, Input, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { BikeComponent } from 'src/app/shared/model/restore-parts/bike-component';
import { Part } from 'src/app/shared/model/restore-parts/part';
import { PartColour } from 'src/app/shared/model/restore-parts/part-colour';
import { RestorePart } from 'src/app/shared/model/restore-parts/restore-part';
import { PartDescription } from 'src/app/shared/model/restore-parts/part-description';
import { NamedModel } from 'src/app/shared/model/restore-parts/restore-parts-interfaces';
import { RestoreRestService } from 'src/app/data/restore-rest.service';
import { ComponentTypeEnum } from 'src/app/shared/model/restore-parts/componentType-enum';

@Component({
  selector: 'app-part-add',
  templateUrl: './part-add.component.html',
  styleUrls: ['./part-add.component.css']
})
export class PartAddComponent implements OnInit {

  @Output() addRestorePart = new EventEmitter<RestorePart>();

  @ViewChild('componentField') fieldComponent;
  @ViewChild('typeField') fieldType;
  @ViewChild('partNameField') fieldPart;
  @ViewChild('partDescField') fieldDesc;
  @ViewChild('colourField') fieldColour;

  constructor(public restoreApi: RestoreRestService) {
  }

  _bikeComponents: BikeComponent[];
  _partColours: PartColour[];
  _parts: Part[];
  _partDescriptions: PartDescription[];

  components: string[];
  types: string[];
  partNames: string[];
  descriptions: string[];
  colours: string[];
  disableType: boolean;
  restorePart: RestorePart;
  status: string;

  ngOnInit() {
    //this.refreshData();
    this.types = Object.keys(ComponentTypeEnum).filter((k) => Number.isNaN(parseInt(k)));
    
    this._clearForm();
  }

  refreshData() {
    
    this.restoreApi.getParts().subscribe((data: Part[]) => {
      this._parts = data;
      this.partNames = this._parts.map(t => t.name);
      this.partNames.sort((a, b) => a.localeCompare(b));
    });

    this.restoreApi.getPartDescriptions().subscribe((data: PartDescription[]) => {
      this._partDescriptions = data;
      this.descriptions = this._partDescriptions.map(t => t.name);
      this.descriptions.sort((a, b) => a.localeCompare(b));
    });

    this.restoreApi.getBikeComponents().subscribe((data: BikeComponent[]) => {
      this._bikeComponents = data;
      this.components = this._bikeComponents.map(t => t.name);
      this.components.sort((a, b) => a.localeCompare(b));
    });

    this.restoreApi.getPartColours().subscribe((data: PartColour[]) => {
      this._partColours = data;
      this.colours = this._partColours.map(t => t.name);
      this.colours.sort((a, b) => a.localeCompare(b));
    });
  }

  onSubmit() {
    if (!this._partValid()) {
      this.status = "Missing information";
    }
    else {
      this.status = "";
      this._populateRestorePart();
      this.addRestorePart.emit(this.restorePart);
      this._clearForm();
    }
  }

  compnentBlur() {
    console.log("on component blur");
    var existingComponent = this._getSelectedComponent();
    if (existingComponent) {
      console.log("disable type");
      this.disableType = true;
      this._fieldSetValue(this.fieldType, this._getTypeForSelectedComponent());
    } else {
      console.log("enable type");
      this.disableType = false;
      this.fieldType.form.setValue('');
    }
  }

  _populateRestorePart() {
    this.restorePart.colour = this._fieldValue(this.fieldColour);
    this.restorePart.component = this._fieldValue(this.fieldComponent);
    let selectedtype :string = this._fieldValue(this.fieldType);
    this.restorePart.type = ComponentTypeEnum[selectedtype];  
    this.restorePart.part = this._fieldValue(this.fieldPart);
    this.restorePart.description = this._fieldValue(this.fieldDesc);
  }

  

  _clearForm(){
    this._fieldSetValue(this.fieldColour, '');
    this._fieldSetValue(this.fieldComponent, '');
    this._fieldSetValue(this.fieldPart, '');
    this._fieldSetValue(this.fieldType, '');
    this._fieldSetValue(this.fieldDesc, '');
    this.restorePart = new RestorePart();
    this.restorePart.quantity = 1;
    this.restorePart.sent = true;
    this.disableType = false;
    this.status = '';
  }

  _getTypeForSelectedComponent(): string {
    let existingComponent =this._getSelectedComponent();
    if (existingComponent) {
      return ComponentTypeEnum[existingComponent.type];
    }
  }

  _getSelectedComponent():BikeComponent{
    var selectedComponent = this._fieldValue(this.fieldComponent);
    if(!selectedComponent){
      return undefined;
    }
    let existingComponent =this._bikeComponents.find(c => c.name.toLowerCase() == selectedComponent.toLowerCase());
    return existingComponent;
  }


  private _partValid(): boolean {
    var formValid = this._fieldValid(this.fieldComponent) &&
    (isNaN(Number(this._fieldValue(this.fieldType))) && ComponentTypeEnum[this._fieldValue(this.fieldType)]&&
    this._fieldValid(this.fieldPart) &&
    this._fieldValid(this.fieldDesc) &&
    this._fieldValid(this.fieldColour) &&
    this.restorePart.quantity > 0);
    console.log(formValid);
    return formValid;
  }

  private _fieldValue(field: any) {
    return field.form.value;
  }

  private _fieldValid(field: any) {
    return field.form.valid;
  }

  private _fieldSetValue(field: any, value: any) {
    field.form.setValue(value);
  }
}



