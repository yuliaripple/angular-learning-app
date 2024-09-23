import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './pages/list/list.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { userResolver } from './resolvers/user.resolver';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'Home page'
  },
  {
    path: 'posts',
    component: ListComponent,
    title: 'Posts page'
  },
  {
    path: 'users/:id',
    component: UserComponent,
    title: 'User own page',
    resolve: { game: userResolver }
  },
  {
    path: 'users',
    component: UsersComponent,
    title: 'Users page',
    // children:
    // [
    //   { path: ':id', component: UserComponent, title: 'User own page', resolve: { game: userResolver } },
    // ]
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
