import {Component} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  title = 'Users';
  users = [
    {
      name: 'Ivano',
      lastname: 'Mercuri',
      email: 'a@t.et',
      fiscalcode: 'abc',
      province: 'ASD' ,
      phone: '092',
      age: 1
    } ,
    {
      name: '1Ivano',
      lastname: '1Mercuri',
      email: '1a@t.et',
      fiscalcode: '1abc',
      province: '1ASD' ,
      phone: '1092',
      age: 2
    } ,
    {
      name: '2Ivano',
      lastname: '2Mercuri',
      email: '2a@t.et',
      fiscalcode: '2abc',
      province: '2ASD' ,
      phone: '2092',
      age: 3
    }
  ];
}
