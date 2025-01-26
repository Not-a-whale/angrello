import { Component, inject, OnInit } from '@angular/core';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import {UserService} from "../../services/user.service";
import {AsyncPipe} from "@angular/common";
import {take} from "rxjs";
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon,
    MatBadge,
    MatButton,
    RouterLink,
    RouterLinkActive,
    MatProgressBar,
    MatMenu,
    MatDivider,
    MatMenuItem,
    MatMenuTrigger,
    MatIconModule,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  userService = inject(UserService);
  themeService = inject(ThemeService);

  userName = "";
  currentTheme: string = 'light-theme';

  ngOnInit() {
    this.userService.getUserProfile().pipe(take(1)).subscribe(user => {
      this.userName = user.fullName;
    });
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    console.log(this.currentTheme);
    this.themeService.setTheme(this.currentTheme);
  }
}
