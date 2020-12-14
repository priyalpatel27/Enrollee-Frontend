import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-enrollee-modal',
  templateUrl: './enrollee-modal.component.html',
  styleUrls: ['./enrollee-modal.component.css']
})
export class EnrolleeModalComponent implements OnInit {
  // the following variables will be initialized by the enrolleetracker component
  @Input() id: string;
  @Input() active: boolean;
  @Input() name: string;
  @Input() dateOfBirth: string;

  constructor(
    public activeModal: NgbActiveModal,
  ) {
    // set default values (which will be overriden by the enrolletracker component)
    this.id = "";
    this.name = "";
    this.dateOfBirth = "";
    this.active = false;
  }

  ngOnInit(): void {
  }

}
