import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../interfaces/user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  // tslint:disable-next-line:no-output-rename
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output() onSelectedUser = new EventEmitter();
  constructor( private userService: UserService) { }

  ngOnInit() {
  }

  deleteUser() {
    this.userDeleted.emit( this.user );
  }

  updateUser() {
    this.onSelectedUser.emit( this.user );
  }
}
