import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileDataDto } from '../../../pages/profile/models/profile-data-dto';
import { PasswordDataDto } from '../../../pages/profile/models/password-data-dto';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getDataProfile(){
    return this.http.get<ProfileDataDto>('https://bibleapp.emmanueldev.com.ar/api/profile-data',{withCredentials: true});
  }

  postDataProfile(profileData: ProfileDataDto){
    return this.http.post<ProfileDataDto>('https://bibleapp.emmanueldev.com.ar/api/update-profile',profileData,{withCredentials: true});
  }

  postDataPassword(postDataPassword: PasswordDataDto){
    console.log('Servicio: Enviando petición');
    return this.http.post<{message: string}>('https://bibleapp.emmanueldev.com.ar/api/update-password',postDataPassword,{withCredentials: true});
  }
  
  
}
