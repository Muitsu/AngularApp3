import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app3';
}
