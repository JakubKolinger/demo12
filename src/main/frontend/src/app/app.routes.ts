import { Routes } from '@angular/router';
import {UsersComponent} from './users/users/users.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AboutComponent} from './about/about.component';
import {AdduserComponent} from './users/adduser/adduser.component';
import {RemoveuserComponent} from './users/removeuser/removeuser.component';
import {ModifyuserComponent} from './users/modifyuser/modifyuser.component';

export const routes: Routes = [

  {path: 'users', component: UsersComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user/add', component: AdduserComponent},
  {path: 'user/remove', component: RemoveuserComponent},
  {path: 'user/modify', component: ModifyuserComponent},

];
