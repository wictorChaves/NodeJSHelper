import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel }  from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export default class UsersService {

  public baseUrl = 'http://localhost:3000/api/users/';

  constructor(private http: HttpClient) { }

  add(user: UserModel) {
    return this.http.post<{ user: UserModel }>(this.baseUrl + 'add', { user: user });
  }

  get() {
    return this.http.get<{ users: UserModel[] }>(this.baseUrl + 'all');
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + 'delete/' + id);
  }

}
