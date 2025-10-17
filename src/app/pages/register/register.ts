import { Component, inject, Inject, signal } from '@angular/core';
import { Button1 } from "../../shared/components/button1/button1";
import { Button2 } from "../../shared/components/button2/button2";
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/services/auth-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterDto } from './model/register-dto';
import { ApiError } from './model/api-error';

@Component({
  selector: 'app-register',
  imports: [Button1, Button2, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  disableRegister = false;

  backendError = signal('');

  formRegister = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),

  });


  constructor(private router: Router, private authService: AuthService) { }




register() {
  if(this.disableRegister) return;
  console.log("numeros de veces clickeado")
  this.disableRegister = true;
  const dto: RegisterDto = {
    username: this.formRegister.value.username!,
    password: this.formRegister.value.password!,
    confirmPassword: this.formRegister.value.confirmPassword!,
    email: this.formRegister.value.email!,
    name: this.formRegister.value.name!,
    lastname: this.formRegister.value.lastname!
  };
  console.log('dto', dto);

  this.authService.register(dto).subscribe({
    next: (response) => {
      console.log('Register successful:', response);
      this.router.navigate(['auth/login']);
      this.backendError.set(''); // limpio errores si todo salió bien
    },
    error: (err) => {
      const apiError: ApiError = err.error;
      if (apiError && apiError.details) {
        console.log('Detalles del error:', apiError.details);
        // Por ejemplo, mostrar solo username o email
        this.backendError.set(apiError.details['username'] || apiError.details['email'] || apiError.details['password'] || apiError.details['confirmPassword'] || 'Error desconocido');
      }
      setTimeout(() => {
        this.backendError.set('');
      }, 3000);
    }
  });
}
  goLogin(){
    this.router.navigate(['auth/login']);
  }
}
