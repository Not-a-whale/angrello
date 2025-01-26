import { Component } from '@angular/core';
import {RegistrationComponent} from "./registration/registration.component";
import {AuthWrapperComponent} from "./auth-wrapper/auth-wrapper.component";
import {ChildrenOutletContexts, RouterOutlet} from "@angular/router";
import {trigger, transition, style, animate, query} from "@angular/animations";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RegistrationComponent,
    AuthWrapperComponent,
    RouterOutlet
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  animations: [
    trigger('routerFadeIn', [
      transition('* <=> *', [
        query(':enter', [
          style({opacity: 0}),
          animate('1s ease-in-out', style({opacity: 1}))
        ], {optional: true}),
      ])
    ])
  ]
})
export class UserComponent {

  constructor(private context: ChildrenOutletContexts) {
  }

  getRouteUrl() {
    return this.context.getContext('primary')?.route?.url;
  }
}
