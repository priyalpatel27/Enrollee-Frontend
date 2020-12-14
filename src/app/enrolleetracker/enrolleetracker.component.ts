import { Component, OnInit } from '@angular/core';

import { EnrolleeService } from '../enrollee.service';
import { Subject } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnrolleeModalComponent } from '../enrollee-modal/enrollee-modal.component';

@Component({
  selector: 'app-enrolleetracker',
  templateUrl: './enrolleetracker.component.html',
  styleUrls: ['./enrolleetracker.component.css']
})
export class EnrolleetrackerComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  // list of enrollees that we will fetch from backend microservice
  public enrollees: any = [];

  constructor(
    private _enrolleeService: EnrolleeService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getEnrollees();

    // don't enable paging functionality of datatable because we want to show all enrollees in one page
    // after all, we want the user to easily know which enrollees are active. if we have multiple pages,
    // the user cannot know who is active at a glance
    this.dtOptions = {
      paging: false,
    };
  }

  // this will be called when the user clicks on an edit button
  public updateIndex(enrollee: any) {
    console.log("Found enrollee: " + enrollee.name);

    // open the modal form and populate the fields
    const modalRef = this.modalService.open(EnrolleeModalComponent);
    modalRef.componentInstance.id = enrollee.id;
    modalRef.componentInstance.active = enrollee.active;
    modalRef.componentInstance.name = enrollee.name;
    modalRef.componentInstance.dateOfBirth = enrollee.dateOfBirth

    // if the user clicks on save changes, update the enrollee information
    modalRef.result.then(
      res => {
        this.updateEnrollee(res.id, res.active, res.name, res.dateOfBirth);
      },
      dismiss => {
        // do nothing
      })
  }

  updateEnrollee(id: string, active: boolean, name: string, dateOfBirth: string) {
    this._enrolleeService.updateEnrollee(id, active, name, dateOfBirth).subscribe(
      data => {
        // delete current datatable so that we don't get an error related to reinitializing data table
        $('#enrollee_table').DataTable().destroy();
        this.getEnrollees();
      },
      error => {
        alert("Error updating the enrollee!");
      });
  }

  getEnrollees() {
    this._enrolleeService.getEnrollees().subscribe(
      data => { this.enrollees = data; this.dtTrigger.next(); },
      err => { alert("Error: Cannot fetch enrollee data."); },
      () => { }
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
