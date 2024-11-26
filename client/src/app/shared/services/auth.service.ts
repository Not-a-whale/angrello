import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://localhost:7265/api';

  constructor(private http: HttpClient) { }

  createUser(formData: any) {
    return this.http.post(this.baseUrl + '/signup', formData);
  }

  signin(formData: any) {
    return this.http.post(this.baseUrl + '/signin', formData);
  }

}
