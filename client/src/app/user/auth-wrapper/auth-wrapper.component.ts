import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-auth-wrapper',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './auth-wrapper.component.html',
  styleUrl: './auth-wrapper.component.scss'
})
export class AuthWrapperComponent {

}
