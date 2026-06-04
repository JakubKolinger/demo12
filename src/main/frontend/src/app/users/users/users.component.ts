import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user.model';
import { UserService, TeacherService } from '../../user.service';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';

// ====================================================================
// 1. UNIVERZÁLNÍ TABULKA (Tato jediná se dívá do users.component.html)
// ====================================================================
@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './users.component.html', // Společné HTML pro zobrazení tabulky
  styleUrl: './users.component.css'
})
export class UserTableComponent {
  @Input() title: string = '';       // Nadpis (Učitelé / Studenti)
  @Input() users: User[] = [];       // Data, která se mají vykreslit
  @Input() loading: boolean = true;  // Stav načítání
  @Input() error: string | null = null; // Chybová hláška
}

// ====================================================================
// 2. KOMPONENTA PRO UČITELE
// ====================================================================
@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [CommonModule, UserTableComponent],
  template: `
    <app-user-table
      title="Učitelé"
      [users]="teachers"
      [loading]="loading"
      [error]="error">
    </app-user-table>
  `,
  styleUrl: './users.component.css'
})
export class TeacherComponent implements OnInit {
  teachers: User[] = [];
  error: string | null = null;
  loading = true;

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe({
      next: (data) => {
        this.teachers = data;
        this.loading = false;
        if (data.length === 0) this.error = "no teachers";
      },
      error: () => {
        this.error = "nestáhli se učitelé";
        this.loading = false;
      }
    });
  }
}

// ====================================================================
// 3. KOMPONENTA PRO STUDENTY
// ====================================================================
@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, UserTableComponent],
  template: `
    <app-user-table
      title="Studenti"
      [users]="students"
      [loading]="loading"
      [error]="error">
    </app-user-table>
  `,
  styleUrl: './users.component.css'
})
export class StudentComponent implements OnInit {
  students: User[] = [];
  error: string | null = null;
  loading = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.students = data;
        this.loading = false;
        if (data.length === 0) this.error = "no students";
      },
      error: () => {
        this.error = "nestáhli se studenti";
        this.loading = false;
      }
    });
  }
}

// ====================================================================
// 4. HLAVNÍ ZAŠTIŤUJÍCÍ KOMPONENTA (Pro Router)
// ====================================================================
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TeacherComponent, StudentComponent],
  template: `
    <app-teachers></app-teachers>
    <hr style="margin: 40px 0; border: 0; border-top: 1px solid #e2e8f0;">
    <app-students></app-students>
  `,
  styleUrl: './users.component.css'
})
export class UsersComponent {}
