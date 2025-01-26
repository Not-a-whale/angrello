import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {ThemeService} from "./shared/services/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  themeService = inject(ThemeService);

  title = 'client';
  currentTheme: string = 'light-theme';

  ngOnInit() {
    this.currentTheme = this.themeService.getTheme();
    this.themeService.setTheme(this.currentTheme);
  }

}
