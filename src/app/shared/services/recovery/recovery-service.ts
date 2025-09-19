import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResetPasswordDto } from '../../../pages/recovery/models/reset-password-dto';

@Injectable({
  providedIn: 'root'
})
export class RecoveryService {
  constructor(private http: HttpClient) { }



  validateToken(token: string) {
    const params = new HttpParams().set('token', token);
    return this.http.get('https://bibleapp.emmanueldev.com.ar/api/validation-recovery', {
      params,
      withCredentials: true
    });
  }

  sendRecoveryEmail(email: string) {
    return this.http.post('https://bibleapp.emmanueldev.com.ar/api/forgot-password',{email},{withCredentials: true});
  }

  resetPassword(dto: ResetPasswordDto) {
    return this.http.post('https://bibleapp.emmanueldev.com.ar/api/reset-password', dto);
  }

  
}
