import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-load-user',
  templateUrl: './load-user.component.html',
  styleUrls: ['./load-user.component.scss']
})

export class LoadUserComponent implements OnInit {

  dataSource = new MatTableDataSource<UserModel>();
  displayColumns = ['id', 'name', 'email', 'action'];
  pageSizeOptions = [3, 6, 9, 12];
  pageSize = 3;
  pageIndex = 0
  pageLength = 0;

  loadUsers() {
    this.userService.getUsers((this.pageIndex + 1), this.pageSize).subscribe({
      next: (response) => {
        this.dataSource.data = response.users;
        this.pageLength = response.count;
      },
      error: (err) => console.error(err)
    })
  }

  ngOnInit(): void {
    this.loadUsers();
  }


  changePage(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadUsers();
  }

  onBtnEdit(id: number): void {
    this.router.navigate(['/users/edit/' + id]);
  }

  onBtnDelete(id: number): void {
    if (window.confirm('are you sure to delete?')) {
      {
        this.userService.delete(id).subscribe({
          next: (resp) => {
            if (this.dataSource.data.length === 1 && this.pageIndex > 0)
              this.pageIndex--;
            this.loadUsers();
          },

        })
      }
    }
  }

  constructor(private userService: UsersService, private router: Router) {


  }
}
