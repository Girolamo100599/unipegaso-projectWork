import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { } // Iniezione del Router

  navigate(path: string) {
    this.router.navigate([`/${path}`]); // Navigazione dinamica
  }
}
