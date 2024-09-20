import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './pages/list/list.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'Home page'
  },
  {
    // path: 'details/:id',
    path: 'list',
    component: ListComponent,
    title: 'List page'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact page'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About page'
  }
];
