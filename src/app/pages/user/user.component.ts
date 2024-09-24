import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  data: any;
  
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.data = this.activatedRoute.snapshot.data;
    console.log('!! data = ', this.data);
  }

}
