import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private http: HttpClient) { }

  getList(): Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users');
  }
}
