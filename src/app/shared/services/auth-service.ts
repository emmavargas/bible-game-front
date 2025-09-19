import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../../pages/login/models/login-response';
import { RegisterDto } from '../../pages/register/model/register-dto';
import { AuthResponseDto } from '../models/auth-response-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'https://bibleapp.emmanueldev.com.ar/api';


    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { username, password },{withCredentials: true});
    }

    register(dto: RegisterDto){
      return this.http.post(`${this.apiUrl}/register`, dto,{withCredentials: true});
    }
  
    auth(){
      return this.http.get<AuthResponseDto>(`${this.apiUrl}/check`,{withCredentials: true});
    }

    logout(){
      return this.http.post(`${this.apiUrl}/logout`,{},{withCredentials: true});
    }

}
