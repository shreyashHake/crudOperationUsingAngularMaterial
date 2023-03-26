import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs";
import { UserModel } from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = "/api/user"

  constructor(private http: HttpClient) { }

  addUser = (user: UserModel) => {
    if (user.id == 0) return this.http.post(this.apiUrl, user);
    else return this.http.put(`${this.apiUrl}/${user.id}`, user);
  }

  getUsers = (page=1, limit=10) => {
    this.http.get(this.apiUrl+`?_page=${page}$?_limit=${limit}`, {observe:'response'})
    .pipe(
      map((res) => {
        const count = parseInt(res.headers.get('X-Total-Count') || '0', 10);
        const users = res.body as UserModel[];

        return {count, users};
      })
    )
  }

  getById = (id:number) => this.http.get<UserModel>(`${this.apiUrl}/${id}`);

  deleteById = (id:number) => this.http.delete<any>(`${this.apiUrl}/${id}`);
}
