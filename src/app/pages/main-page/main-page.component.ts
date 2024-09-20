import { Component } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
