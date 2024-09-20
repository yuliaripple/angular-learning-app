import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { ThreeDotsPipe } from '../../pipes/threeDots.pipe';
import { ChangeColorBackgroundDirective } from '../../directives/change-color-background.directive';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    UpperCasePipe, 
    ThreeDotsPipe,
    ChangeColorBackgroundDirective
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  httpClient = inject(HttpClient);
  public data: Array<any> = [];
  ngOnInit() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.data = data;
        }, error: (err) => console.log(err)
      });
  }
}
