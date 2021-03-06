import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PartAddComponent } from './restoration/partslog/part-add/part-add.component';
import { MatAutocompleteModule, MatTabsModule, MatToolbarModule, MatCardModule,
   MatFormFieldModule, MatInputModule, MatCheckboxModule, MatButtonModule, MatExpansionModule,
  MatTableModule, MatListModule, MatIconModule, MatSidenavModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AutoDdComponent } from './controls/auto-dd/auto-dd.component';
import { RestoreDetailComponent } from './restoration/restore-detail/restore-detail.component';
import { PartsListComponent } from './restoration/partslog/parts-list/parts-list.component';
import { RestorationComponent } from './restoration/restoration.component';
import { HomeComponent } from './home/home/home.component';
import { AddRestorationComponent } from './home/add-restoration/add-restoration.component';
import { ProcessLogComponent } from './restoration/process-log/process-log.component';
import { AddProcessLogComponent } from './restoration/process-log/add-process-log/add-process-log.component';
import { OrderedPartsLogComponent } from './restoration/ordered-parts-log/ordered-parts-log.component';
import { AddOrderedPartComponent } from './restoration/ordered-parts-log/add-ordered-part/add-ordered-part.component';

@NgModule({
  declarations: [
    AppComponent,
    PartAddComponent,
    AutoDdComponent,
    RestoreDetailComponent,
    PartsListComponent,
    RestorationComponent,
    HomeComponent,
    AddRestorationComponent,
    ProcessLogComponent,
    AddProcessLogComponent,
    OrderedPartsLogComponent,
    AddOrderedPartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
