import { Component } from '@angular/core';
import {RegistrationComponent} from "./registration/registration.component";
import {AuthWrapperComponent} from "./auth-wrapper/auth-wrapper.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RegistrationComponent,
    AuthWrapperComponent,
    RouterOutlet
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
