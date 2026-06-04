import { Component } from '@angular/core';
import {UserService} from '../../../user.service';
import {User} from '../../../user.model';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-modifyuser',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './modifyuser.component.html',
  styleUrl: './modifyuser.component.css'
})
export class ModifyuserComponent {
  id: number = 0;
  name = '';
  email = '';
  message = '';
  error = '';

  modalOpen = false;
  modalUsers: User[] = [];
  modalLoading = false;
  modalError = '';

  constructor(private userService: UserService) {}

  openModal(): void {
    this.modalOpen = true;
    this.modalLoading = true;
    this.modalError = '';
    this.modalUsers = [];

    this.userService.getUsers().subscribe({
      next: (users) => {
        this.modalUsers = users;
        this.modalLoading = false;
      },
      error: () => {
        this.modalError = 'Nepodařilo se načíst uživatele';
        this.modalLoading = false;
      }
    });
  }

  selectUser(user: User): void {
    this.id    = user.id;
    this.name  = user.name;
    this.email = user.email;
    this.modalOpen = false;
    this.message = '';
    this.error = '';
  }

  closeModal(): void {
    this.modalOpen = false;
  }

  modifyUser(): void {
    this.message = '';
    this.error = '';

    if (!this.id || this.id <= 0) {
      this.error = 'Nejprve vyber uživatele';
      return;
    }

    const patch: { name?: string; email?: string } = {};
    if (this.name.trim())  patch.name  = this.name.trim();
    if (this.email.trim()) patch.email = this.email.trim();

    if (Object.keys(patch).length === 0) {
      this.error = 'Vyplň alespoň jméno nebo email';
      return;
    }

    this.userService.modifyUser(this.id, patch).subscribe({
      next: (updated) => {
        this.message = `Uživatel ${updated.id} upraven: ${updated.name} / ${updated.email}`;
        this.id = 0;
        this.name = '';
        this.email = '';
      },
      error: () => {
        this.error = 'Nepodařilo se upravit uživatele';
      }
    });
  }
}
