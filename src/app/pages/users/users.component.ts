import { Component } from '@angular/core';
import { UserInterface } from '../../interfaces/user-interface';
import { GetUsersService } from '../../services/get-users.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  public usersList: UserInterface[] = [];
  constructor(private serviceUsers: GetUsersService) {}

  ngOnInit() {
    this.serviceUsers.getList().subscribe({
      next: (data: UserInterface[]) => {
        console.log(data);
        this.usersList = data; 
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('complete')
      }
    })      
  }

}
