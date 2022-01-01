import { Component, OnInit } from '@angular/core';
import { UserModel }         from '../model/user.model';
import UsersService          from '../service/users.service';

@Component({
  selector   : 'app-list',
  templateUrl: './list.component.html',
  styleUrls  : ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public users: UserModel[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList() {
    this.usersService.get().subscribe(users => {
      this.users = users.users;
    });
  }

  delete(id: number) {
    this.usersService.delete(id).subscribe(() => {
      this.loadList();
    });
  }

}
