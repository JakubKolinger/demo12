import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router'; // Přidán import Router
import { CommonModule } from '@angular/common'; // Přidán import CommonModule pro funkčnost *ngIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule // Přidáno sem, aby fungoval *ngIf v app.component.html
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  // Konstruktor, který zpřístupní aktuální URL adresu pro HTML šablonu
  constructor(public router: Router) {}
}
