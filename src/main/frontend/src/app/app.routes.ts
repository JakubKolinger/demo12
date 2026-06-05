import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { ModifyuserComponent } from "./users/users/modifyuser/modifyuser.component";
import {UsersComponent} from './users/users/users.component';
import {AdduserComponent} from './users/users/adduser/adduser.component';
import {RemoveuserComponent} from './users/users/removeuser/removeuser.component';

export const routes: Routes = [
  // 1. POKUD UŽIVATEL ZADÁ /home, PŘESMĚRUJ HO NA ČISTÉ /
  { path: 'home', redirectTo: '', pathMatch: 'full' },

  // 2. ČISTÁ TRASA PRO DOMOVSKOU STRÁNKU (Nespouští žádnou komponentu, obsah je v app.component)
  { path: '', children: [] },

  {path: 'users', component: UsersComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user/add', component: AdduserComponent},
  {path: 'user/remove', component: RemoveuserComponent},
  {path: 'user/modify', component: ModifyuserComponent},

];
