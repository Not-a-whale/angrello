import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getUserProfile(): Observable<{ email: string, fullName: string}> {
    return this.http.get<{ email: string, fullName: string}>(environment.apiBaseUrl + '/userprofile')
  }
}
