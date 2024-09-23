import { Component } from '@angular/core';
import { UserInterface } from '../../interfaces/user-interface';
import { GetUserService } from '../../services/get-user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  public userData: UserInterface = {};
  constructor(private serviceUser: GetUserService) {}
  ngOnInit() {
    this.serviceUser.getUserById('1').subscribe({
      next: (data: UserInterface) => {
        console.log('user = ', data);
        this.userData = data; 
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
