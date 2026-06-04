import { Component, OnInit } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { UserService } from '../../../user.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  name = '';
  email = '';
  message = '';
  error = '';

  constructor(private userService: UserService) {}

  addUser(): void {
    this.message = '';
    this.error = '';

    this.userService.addUser({ name: this.name, email: this.email }).subscribe({
      next: (created) => {
        this.message = `Uživatel přidán (ID: ${created.id})`;
        this.name = '';
        this.email = '';
      },
      error: () => {
        this.error = 'Nepodařilo se přidat uživatele';
      }
    });
  }
}
