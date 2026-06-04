import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {User} from '../../../user.model';
import {UserService} from '../../../user.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-removeuser',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './removeuser.component.html',
  styleUrl: './removeuser.component.css'
})
export class RemoveuserComponent {
  message = '';
  error = '';

  // Modal 1 — výběr uživatele
  listOpen = false;
  listUsers: User[] = [];
  listLoading = false;
  listError = '';

  // Modal 2 — potvrzení smazání
  confirmOpen = false;
  selected: User | null = null;

  constructor(private userService: UserService) {}

  openList(): void {
    this.listOpen = true;
    this.confirmOpen = false;
    this.listLoading = true;
    this.listError = '';
    this.listUsers = [];

    this.userService.getUsers().subscribe({
      next: (users) => { this.listUsers = users; this.listLoading = false; },
      error: () => { this.listError = 'Nepodařilo se načíst uživatele'; this.listLoading = false; }
    });
  }

  pickUser(user: User): void {
    this.selected = user;
    this.listOpen = false;
    this.confirmOpen = true;
    this.message = '';
    this.error = '';
  }

  confirmDelete(): void {
    if (!this.selected) return;

    this.userService.deleteUser(this.selected.id).subscribe({
      next: (res) => {
        this.message = res.message;
        this.confirmOpen = false;
        this.selected = null;
      },
      error: () => {
        this.error = 'Nepodařilo se smazat uživatele';
        this.confirmOpen = false;
      }
    });
  }

  pickAnother(): void {
    this.confirmOpen = false;
    this.selected = null;
    this.openList();
  }

  cancel(): void {
    this.confirmOpen = false;
    this.selected = null;
  }
}
