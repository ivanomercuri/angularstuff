import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Users';
  users: User[] = [];
  @Output() updateUser = new EventEmitter<User>();
  constructor( private service: UserService ) {}
  ngOnInit(): void {
    this.users = this.service.getUsers();
  }
  onDeleteUser(user) {
    this.service.deleteUsers(user);
  }
  onSelectUser(user) {
    this.updateUser.emit( user );
  }
}
