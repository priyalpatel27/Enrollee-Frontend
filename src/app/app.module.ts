import { BrowserModule } from '@angular/platform-browser';

// http module to perform api calls
import { HttpClientModule } from '@angular/common/http';

// data table module to show data table
import { DataTablesModule } from 'angular-datatables';

// bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// enrolle service that will be used to interact with api
import { EnrolleeService } from './enrollee.service';
import { EnrolleeModalComponent } from './enrollee-modal/enrollee-modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EnrolleetrackerComponent } from './enrolleetracker/enrolleetracker.component';

@NgModule({
  declarations: [
    AppComponent,
    EnrolleeModalComponent,
    NavbarComponent,
    EnrolleetrackerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EnrolleeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
