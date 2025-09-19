import { Component, signal } from '@angular/core';
import { ProfileHeader } from "./components/profile-header/profile-header";
import { ProfileScore } from "./components/profile-score/profile-score";
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { RankingsService } from '../../shared/services/rankings-service';
import { ProfileState } from '../../shared/services/profile/profile-state';
import { ProfileService } from '../../shared/services/profile/profile-service';
import { ProfileDataDto } from './models/profile-data-dto';
import { ApiError } from '../register/model/api-error';
import { PasswordDataDto } from './models/password-data-dto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [ProfileHeader, ReactiveFormsModule, ProfileScore, RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  backendError = signal('');
  infoMessagePassword = signal('');

  constructor(public rankingsService: RankingsService, public profileState: ProfileState, private profileService: ProfileService) {
    this.rankingsService.getRankingsUser().subscribe({
      next: (res) => {
        profileState.setUsername(res.username);
        profileState.setScoreEasy(res.easy.score);
        profileState.setScoreMedium(res.medium.score);
        profileState.setScoreHard(res.hard.score);
      },
      error: () => {
        console.log('Error al obtener el ranking')
      }
    });
    
    //Actualizar el profileState 
    this.profileService.getDataProfile().subscribe({
      next: (res) =>{
        this.profileState.setName(res.name);
        this.profileState.setLastname(res.lastname);
        this.profileState.setEmail(res.email);
        this.profileState.setUsername(res.username);
        this.profileForm.setValue({
          name: res.name,
          lastname: res.lastname,
          username: res.username
        });
        console.log(res);
        console.log(this.profileState);
      },
      error: () => {
        console.log('Error al obtener los datos del perfil')
      }
    })
  }

  profileForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(2)]),
    lastname: new FormControl('',[Validators.required, Validators.minLength(2)]),
    username: new FormControl('',[Validators.required, Validators.minLength(6)]),
  })

  passwordForm = new FormGroup({
    password: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl('')
  })
  
  


  onSubmit() {
    const profileData: ProfileDataDto = {
      name: this.profileForm.get('name')?.value || '',
      lastname: this.profileForm.get('lastname')?.value || '',
      email: this.profileState.getEmail(), // El email no se edita en este formulario
      username: this.profileForm.get('username')?.value || ''
    }
    
    this.profileService.postDataProfile(profileData).subscribe({
      next: (res) =>{
        this.profileState.setName(res.name);
        this.profileState.setLastname(res.lastname);
        this.profileState.setUsername(res.username);
      },
      error: (err) => {
        const apiError:ApiError = err.error;
        if (apiError && apiError.details) {
          this.backendError.set(apiError.details['username'] || 'Error desconocido');
          console.log('Detalles del error:', apiError.details);
        }
      }
    })

  }

  volverMenu() {
    // Lógica para volver al menú principal
  }

  onSubmitPassword() {
    const passwordData: PasswordDataDto = {
      currentPassword: this.passwordForm.get('password')?.value || '',
      newPassword: this.passwordForm.get('newPassword')?.value || '',
      confirmPassword: this.passwordForm.get('confirmPassword')?.value || ''
    }
    this.profileService.postDataPassword(passwordData).subscribe({
      next: (res) =>{
        console.log(res)
        console.log('Contraseña actualizada con éxito');
        this.infoMessagePassword.set('Contraseña actualizada con éxito');
      },
      error: (err) => {
        const apiError:ApiError = err.error;
        if (apiError && apiError.details) {
          this.infoMessagePassword.set(apiError.details['password'] || 'Error desconocido');
          console.log('Detalles del error:', apiError.details);
        }
      }
    })
  }

}
