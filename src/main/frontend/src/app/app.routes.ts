import { Routes } from '@angular/router';
import {UsersComponent} from './users/users/users.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [

  {path: 'users', component: UsersComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent}

];
