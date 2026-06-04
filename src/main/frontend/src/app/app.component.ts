import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  // DŮLEŽITÉ: Musí zde být slůvko "public", aby šablona viděla metodu router.isActive()
  constructor(public router: Router) {}
}
