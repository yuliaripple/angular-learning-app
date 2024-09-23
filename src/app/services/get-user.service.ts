import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http: HttpClient) { }

  getUserById(userId: string | null): Observable<UserInterface>{
    return this.http.get<UserInterface>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
}
