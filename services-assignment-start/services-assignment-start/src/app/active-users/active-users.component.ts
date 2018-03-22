import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.users = this.appService.activeUsers;
    }
  onSetToInactive(id: number) {
    this.appService.setStatusToInactive(id);
  }
}
