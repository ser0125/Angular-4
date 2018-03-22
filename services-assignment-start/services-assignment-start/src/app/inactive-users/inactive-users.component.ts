import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private appService: AppService) {

  }
  ngOnInit() {
    this.users = this.appService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.appService.setStatusToActive(id);
  }
}
