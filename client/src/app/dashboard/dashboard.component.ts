import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../shared/services/auth.service";
import {HeaderComponent} from "../shared/layout/header/header.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router: Router,
              private authService: AuthService) { }

  onLogout() {
    this.authService.deleteToken();
    this.router.navigateByUrl('/signin');
  }
}
