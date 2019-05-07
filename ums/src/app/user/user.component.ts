import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../users/user.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user;
  // tslint:disable-next-line:no-output-rename
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  constructor( private userService: UserService) { }

  ngOnInit() {
  }

  deleteUser() {
    this.userDeleted.emit( this.user );
    // this.userService.deleteUsers(this.user);
  }
}
