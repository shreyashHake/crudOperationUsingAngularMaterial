import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-load-user',
  templateUrl: './load-user.component.html',
  styleUrls: ['./load-user.component.scss']
})
export class LoadUserComponent implements OnInit{

  datasource = new MatTableDataSource<UserModel>();
  displayColumns = ['id', 'name', 'email'];

  constructor(private userService : UsersService) { }

  loadUser() {
    this.userService.getUsers().subscribe({
      next:(resource) => {
        this.datasource.data = resource.users;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  ngOnInit(): void {
    this.loadUser();
  }

  onBtnEdit(id: any) {

  }

  onBtnDelete(id: any) {

  }
}
