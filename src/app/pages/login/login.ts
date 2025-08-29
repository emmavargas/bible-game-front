import { Component, inject, signal } from '@angular/core';
import { Button1 } from "../../shared/components/button1/button1";
import { Button2 } from "../../shared/components/button2/button2";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth-service';
import { Router } from '@angular/router';
import { GameState } from '../../shared/services/game-state';

@Component({
  selector: 'app-login',
  imports: [Button1, Button2, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  router = inject(Router);
  constructor(public gameState: GameState,private authService: AuthService) { }

  formLogin = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })


  authenticate(){
    this.authService.auth().subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.gameState.isLogin.set(true);
        // Maneja la respuesta del login, como guardar el token, redirigir, etc.
      },
      error: (error) => {
        console.error('Login error:', error);
        this.gameState.isLogin.set(false);
        this.gameState.isLogin
        this.router.navigate(['auth/login']);
        // Maneja el error de login, como mostrar un mensaje al usuario
      }
    })

  }

  login() {
    if (this.formLogin.valid) {
      const username = this.formLogin.get('username')?.value;
      const password = this.formLogin.get('password')?.value;
      console.log('Logging in with', username, password);
      // Aquí puedes llamar a tu servicio de autenticación

      this.authService.login(username ?? '', password ?? '').subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.gameState.isLogin.set(true);
          this.gameState.nameUser.set(response.username);
          this.router.navigate(['']);
          // Maneja la respuesta del login, como guardar el token, redirigir, etc.
        },
        error: (error) => {
          console.error('Login error:', error);
          // Maneja el error de login, como mostrar un mensaje al usuario
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
