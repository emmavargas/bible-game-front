import { Component, inject, signal } from '@angular/core';
import { Button1 } from "../../shared/components/button1/button1";
import { Button2 } from "../../shared/components/button2/button2";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth-service';
import { Router, RouterLink } from '@angular/router';
import { GameState } from '../../shared/services/game-state';
import { ApiError } from '../register/model/api-error';

@Component({
  selector: 'app-login',
  imports: [Button1, Button2, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  backendError = signal('');


  router = inject(Router);
  constructor(public gameState: GameState,private authService: AuthService) { }

  formLogin = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required])
  })



  login() {
    if (this.formLogin.valid) {
      const username = this.formLogin.get('username')?.value;
      const password = this.formLogin.get('password')?.value;

      this.authService.login(username ?? '', password ?? '').subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.gameState.isLogin.set(true);
          this.gameState.nameUser.set(response.username);
          this.router.navigate(['']);
          // Maneja la respuesta del login, como guardar el token, redirigir, etc.
        },
        error: (error) => {
          const apiError: ApiError = error.error;
          if (apiError && apiError.details) {
            console.log('Detalles del error:', apiError.details);
            // Por ejemplo, mostrar solo username o email
            this.backendError.set(apiError.details['login'] || 'Error desconocido');
          }
          setTimeout(() => {
            this.backendError.set('');
          }, 3000);
        }
      });

    } else {
      console.log('Formulario no válido');
    }
  }

  goRegister() {
    this.router.navigate(['auth/register']);
  }



}
