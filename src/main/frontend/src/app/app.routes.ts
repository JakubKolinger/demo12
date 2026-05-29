import { Routes } from '@angular/router';
import {UsersComponent} from './users/users/users.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AdduserComponent} from './adduser/adduser.component';
import {RemoveuserComponent} from './removeuser/removeuser.component';

export const routes: Routes = [

  {path: 'users', component: UsersComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'adduser', component: AdduserComponent},
  {path: 'removeuser', component: RemoveuserComponent},

];
