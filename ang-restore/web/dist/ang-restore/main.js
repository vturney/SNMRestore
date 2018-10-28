(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {color: #0d47a1; text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif}\r\n\r\napp-part-add{margin-top: 10px}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>\n    {{ title }}\n  </h1>\n  <!--REST Call: {{products}}-->\n  <div>\n      <mat-toolbar color=\"primary\">Restoration</mat-toolbar>\n    <mat-tab-group color=\"accent\">\n      <mat-tab label=\"Parts\">\n        <mat-toolbar color=\"primary\">Parts</mat-toolbar>\n        <app-part-add [bikeComponents]=\"bikeComponents\" [componentTypes]=\"componentTypes\" [parts]=\"parts\" [partColours]=\"colours\"\n          [partDescriptions]=\"descriptions\" (addRestorePart)=\"saveRestorePart($event)\"></app-part-add>\n      </mat-tab>\n      <mat-tab label=\"Other\"></mat-tab>\n    </mat-tab-group>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_restore_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/restore-rest.service */ "./src/app/restore-rest.service.ts");
/* harmony import */ var _data_restore_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/restore-data */ "./src/app/data/restore-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(restoreApi) {
        this.restoreApi = restoreApi;
        this.title = 'St Neots Motorcyles GP Restorations';
        this.products = 'nothing';
        this.restoreData = new _data_restore_data__WEBPACK_IMPORTED_MODULE_2__["RestoreData"](this.restoreApi);
    }
    AppComponent.prototype.saveRestorePart = function (part) {
        this.restoreData.saveRestorePart(part);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.restoreData.getProducts();
        this.bikeComponents = this.restoreData.getBikeComponents();
        this.parts = this.restoreData.getParts();
        this.componentTypes = this.restoreData.getComponentTypes();
        this.colours = this.restoreData.getColours();
        this.descriptions = this.restoreData.getDescriptions();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_restore_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestoreRestService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _partslog_part_add_part_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partslog/part-add/part-add.component */ "./src/app/partslog/part-add/part-add.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _auto_dd_auto_dd_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auto-dd/auto-dd.component */ "./src/app/auto-dd/auto-dd.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _partslog_part_add_part_add_component__WEBPACK_IMPORTED_MODULE_5__["PartAddComponent"],
                _auto_dd_auto_dd_component__WEBPACK_IMPORTED_MODULE_9__["AutoDdComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auto-dd/auto-dd.component.css":
/*!***********************************************!*\
  !*** ./src/app/auto-dd/auto-dd.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auto-dd/auto-dd.component.html":
/*!************************************************!*\
  !*** ./src/app/auto-dd/auto-dd.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field fxFlex=\"90\">\n    <input type=\"text\" [placeholder]=\"watermark\" required=true aria-label=\"Component\" (blur)=\"onblur()\" matInput [formControl]=\"form\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onblur()\" >\n      <mat-option *ngFor=\"let option of filteredOptions| async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/auto-dd/auto-dd.component.ts":
/*!**********************************************!*\
  !*** ./src/app/auto-dd/auto-dd.component.ts ***!
  \**********************************************/
/*! exports provided: AutoDdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoDdComponent", function() { return AutoDdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutoDdComponent = /** @class */ (function () {
    function AutoDdComponent() {
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    Object.defineProperty(AutoDdComponent.prototype, "disabled", {
        set: function (disabled) { this._disableField(disabled); },
        enumerable: true,
        configurable: true
    });
    AutoDdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.form.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return _this._filter(value); }));
    };
    AutoDdComponent.prototype.onblur = function () {
        this.blur.emit();
    };
    AutoDdComponent.prototype._disableField = function (disable) {
        console.log('auto-dd disable set:' + disable);
        if (disable === true) {
            this.form.disable();
        }
        else {
            this.form.enable();
        }
    };
    AutoDdComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AutoDdComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AutoDdComponent.prototype, "watermark", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AutoDdComponent.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AutoDdComponent.prototype, "blur", void 0);
    AutoDdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auto-dd',
            template: __webpack_require__(/*! ./auto-dd.component.html */ "./src/app/auto-dd/auto-dd.component.html"),
            styles: [__webpack_require__(/*! ./auto-dd.component.css */ "./src/app/auto-dd/auto-dd.component.css")]
        })
    ], AutoDdComponent);
    return AutoDdComponent;
}());



/***/ }),

/***/ "./src/app/data/restore-data.ts":
/*!**************************************!*\
  !*** ./src/app/data/restore-data.ts ***!
  \**************************************/
/*! exports provided: RestoreData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreData", function() { return RestoreData; });
var RestoreData = /** @class */ (function () {
    function RestoreData(restoreAPI) {
        this.restoreAPI = restoreAPI;
    }
    RestoreData.prototype.saveRestorePart = function (part) {
        console.log('save Restore Part');
        console.log(part);
    };
    //['Reed', 'Front Brake Caliper', 'Crank Case'];
    RestoreData.prototype.getBikeComponents = function () {
        return [
            { id: 1, typeId: 1, name: 'Reed' },
            { id: 2, typeId: 2, name: 'CrankCase' },
            { id: 3, typeId: 1, name: 'Front Brake Caliper' }
        ];
    };
    // Engine, Chassis
    RestoreData.prototype.getComponentTypes = function () {
        return [
            { id: 1, name: 'Engine' },
            { id: 2, name: 'Chassis' }
        ];
    };
    // ['Bolt', 'Nut', 'Half Nut', 'Screw', 'pin'];
    RestoreData.prototype.getParts = function () {
        return [
            { id: 1, name: 'Bolt' },
            { id: 2, name: 'Nut' },
            { id: 3, name: 'Screw' },
            { id: 4, name: 'Pin' }
        ];
    };
    // 
    //['M6 * 20', 'M8 * 45', 'id 6mm od 20mm thickness 1.5mm']
    RestoreData.prototype.getDescriptions = function () {
        return [
            { id: 1, name: 'M6 * 20' },
            { id: 2, name: 'M8 * 45' },
            { id: 3, name: 'M6 * 20' },
            { id: 4, name: 'id 6mm od 20mm thickness 1.5mm' }
        ];
    };
    RestoreData.prototype.getColours = function () {
        return [{ id: 1, name: 'Olive' }, { id: 2, name: 'Gold' }, { id: 3, name: 'Bright' }, { id: 4, name: 'Black' }];
    };
    RestoreData.prototype.getProducts = function () {
        // this.restoreAPI.getProducts().subscribe((data: string) => {
        //   console.log(data);
        //   this.products = data;
        // }, (err) => {
        //   console.log(err);
        // });
    };
    return RestoreData;
}());



/***/ }),

/***/ "./src/app/partslog/part-add/part-add.component.css":
/*!**********************************************************!*\
  !*** ./src/app/partslog/part-add/part-add.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-checkbox {\r\n    margin-top:20px;\r\n    margin-left:20px;\r\n  }"

/***/ }),

/***/ "./src/app/partslog/part-add/part-add.component.html":
/*!***********************************************************!*\
  !*** ./src/app/partslog/part-add/part-add.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"100\" fxLayoutAlign=\"center\">\n  <form (ngSubmit)=\"onSubmit()\" fxFlex=\"90\">\n    <div fxLayout=\"row\">\n      <app-auto-dd fxFlex=\"50\" #componentField [options]=\"components\" watermark=\"Component\" (blur)=\"compnentBlur($event)\"></app-auto-dd>\n      <app-auto-dd fxFlex=\"50\" [disabled]=\"disableType\" #typeField [options]=\"types\" watermark=\"Type\"></app-auto-dd>\n    </div>\n    <div fxLayout=\"row\">\n      <app-auto-dd fxFlex=\"25\" #partNameField [options]=\"partNames\" watermark=\"Part\"></app-auto-dd>\n      <app-auto-dd fxFlex=\"50\" #partDescField [options]=\"descriptions\" watermark=\"Description\"></app-auto-dd>\n      <app-auto-dd fxFlex=\"25\" #colourField [options]=\"colours\" watermark=\"Colour\"></app-auto-dd>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n      <mat-form-field fxFlex=\"5\"> <input type=\"number\" matInput placeholder=\"Quantity\" name=\"quantity\" [(ngModel)]=\"restorePart.quantity\"></mat-form-field>\n      <mat-checkbox fxFlex=\"5\" color=\"accent\" name=\"partSent\" [(ngModel)]=\"restorePart.sent\">Sent</mat-checkbox>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\"> \n      <button fxFlex=\"20\" mat-raised-button color=\"accent\" type=\"submit\">Save</button>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\"  *ngIf=\"status.length>0\">\n      <mat-form-field fxFlex=\"80\"><input type=\"text\"  matInput name=\"status\" ng-readonly=\"true\"   [(ngModel)]=\"status\"\n          aria-label=\"Readonly field\"></mat-form-field>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/partslog/part-add/part-add.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/partslog/part-add/part-add.component.ts ***!
  \*********************************************************/
/*! exports provided: PartAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartAddComponent", function() { return PartAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_restore_parts_restore_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/model/restore-parts/restore-part */ "./src/app/shared/model/restore-parts/restore-part.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartAddComponent = /** @class */ (function () {
    function PartAddComponent() {
        this.addRestorePart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PartAddComponent.prototype.ngOnInit = function () {
        this.restorePart = new _shared_model_restore_parts_restore_part__WEBPACK_IMPORTED_MODULE_1__["RestorePart"]();
        this.restorePart.quantity = 1;
        this.restorePart.sent = true;
        this.components = this.bikeComponents.map(function (c) { return c.name; });
        this.types = this.componentTypes.map(function (c) { return c.name; });
        this.partNames = this.parts.map(function (p) { return p.name; });
        this.descriptions = this.partDescriptions.map(function (p) { return p.name; });
        this.colours = this.partColours.map(function (p) { return p.name; });
        this.disableType = false;
        this.status = '';
    };
    PartAddComponent.prototype.onSubmit = function () {
        if (!this._partValid()) {
            this.status = "Missing information";
        }
        else {
            this.status = "";
            this._populateRestorePart();
            this.addRestorePart.emit(this.restorePart);
        }
    };
    PartAddComponent.prototype.compnentBlur = function () {
        console.log("on component blur");
        var existingComponent = this._getSelectedItemByName(this.fieldComponent, this.bikeComponents);
        if (existingComponent) {
            console.log("disable type");
            this.disableType = true;
            this._fieldSetValue(this.fieldType, this._getTypeForSelectedComponent().name);
        }
        else {
            console.log("enable type");
            this.disableType = false;
            this.fieldType.form.setValue('');
        }
    };
    PartAddComponent.prototype._populateRestorePart = function () {
        this._populateRestoreComponentId();
        this._populateRestoreTypeId();
        this._populateRestorePartId();
        this._populateRestorePartDescriptionId();
    };
    PartAddComponent.prototype._getTypeForSelectedComponent = function () {
        var existingComponent = this._getSelectedItemByName(this.fieldComponent, this.bikeComponents);
        if (existingComponent) {
            var compType = this.componentTypes.find(function (t) { return t.id == existingComponent.typeId; });
            return compType;
        }
    };
    PartAddComponent.prototype._populateRestoreComponentId = function () {
        var existingComponent = this._getSelectedItemByName(this.fieldComponent, this.bikeComponents);
        if (existingComponent) {
            this.restorePart.componentId = existingComponent.id;
        }
        else {
            // POST Component
            console.log('NOTexistingComp:');
            this.restorePart.componentId = null;
        }
    };
    PartAddComponent.prototype._populateRestoreTypeId = function () {
        var existingType = this._getSelectedItemByName(this.fieldType, this.componentTypes);
        if (existingType) {
            this.restorePart.typeId = existingType.id;
        }
    };
    PartAddComponent.prototype._populateRestorePartId = function () {
        var existingPart = this._getSelectedItemByName(this.fieldPart, this.parts);
        if (existingPart) {
            this.restorePart.partId = existingPart.id;
        }
        else {
            // POST PART
            console.log('NOTexistingPart');
            this.restorePart.partId = null;
        }
    };
    PartAddComponent.prototype._populateRestorePartDescriptionId = function () {
        var existingDesc = this._getSelectedItemByName(this.fieldDesc, this.partDescriptions);
        if (existingDesc) {
            this.restorePart.descriptionId = existingDesc.id;
        }
        else {
            // POST DESC
            console.log('NOTexistingDesc');
            this.restorePart.descriptionId = null;
        }
    };
    PartAddComponent.prototype._populateRestoreColourId = function () {
        var existingColour = this._getSelectedItemByName(this.fieldColour, this.partColours);
        if (existingColour) {
            this.restorePart.colourId = existingColour.id;
        }
        else {
            // POST COLOUR
            console.log('NOTexistingColour:');
            this.restorePart.colourId = null;
        }
    };
    PartAddComponent.prototype._partValid = function () {
        console.log("Checking Form Valid...");
        return this._fieldValid(this.fieldColour); // && ...&&
    };
    PartAddComponent.prototype._fieldValue = function (field) {
        return field.form.value;
    };
    PartAddComponent.prototype._fieldValid = function (field) {
        return field.form.valid;
    };
    PartAddComponent.prototype._fieldSetValue = function (field, value) {
        field.form.setValue(value);
    };
    PartAddComponent.prototype._getSelectedItemByName = function (field, collection) {
        var selectedItem = this._fieldValue(field);
        if (selectedItem) {
            var existingItem = collection.find(function (c) { return c.name.toLowerCase() == selectedItem.toLowerCase(); });
            return existingItem;
        }
        else {
            return undefined;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PartAddComponent.prototype, "bikeComponents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PartAddComponent.prototype, "componentTypes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PartAddComponent.prototype, "parts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PartAddComponent.prototype, "partColours", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PartAddComponent.prototype, "partDescriptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PartAddComponent.prototype, "addRestorePart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('componentField'),
        __metadata("design:type", Object)
    ], PartAddComponent.prototype, "fieldComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('typeField'),
        __metadata("design:type", Object)
    ], PartAddComponent.prototype, "fieldType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('partNameField'),
        __metadata("design:type", Object)
    ], PartAddComponent.prototype, "fieldPart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('partDescField'),
        __metadata("design:type", Object)
    ], PartAddComponent.prototype, "fieldDesc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('colourField'),
        __metadata("design:type", Object)
    ], PartAddComponent.prototype, "fieldColour", void 0);
    PartAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-part-add',
            template: __webpack_require__(/*! ./part-add.component.html */ "./src/app/partslog/part-add/part-add.component.html"),
            styles: [__webpack_require__(/*! ./part-add.component.css */ "./src/app/partslog/part-add/part-add.component.css")]
        })
    ], PartAddComponent);
    return PartAddComponent;
}());



/***/ }),

/***/ "./src/app/restore-rest.service.ts":
/*!*****************************************!*\
  !*** ./src/app/restore-rest.service.ts ***!
  \*****************************************/
/*! exports provided: RestoreRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreRestService", function() { return RestoreRestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestoreRestService = /** @class */ (function () {
    function RestoreRestService(http) {
        this.http = http;
    }
    RestoreRestService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    RestoreRestService.prototype.getProducts = function () {
        //return this.http.get(endpoint + 'products').pipe(
        console.log('get products called');
        return this.http.get(endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (r) { return JSON.stringify(r); }));
    };
    RestoreRestService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    RestoreRestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestoreRestService);
    return RestoreRestService;
}());

var endpoint = 'http://localhost:3000/';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json'
//   })
//};


/***/ }),

/***/ "./src/app/shared/model/restore-parts/restore-part.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/model/restore-parts/restore-part.ts ***!
  \************************************************************/
/*! exports provided: RestorePart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePart", function() { return RestorePart; });
var RestorePart = /** @class */ (function () {
    function RestorePart() {
    }
    return RestorePart;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\VTCode\ang-restore\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map