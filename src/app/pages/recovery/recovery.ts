import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RecoveryService } from '../../shared/services/recovery/recovery-service';
import { ResetPasswordDto } from './models/reset-password-dto';

@Component({
  selector: 'app-recovery',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './recovery.html',
  styleUrl: './recovery.css'
})
export class Recovery implements OnInit{
  backendError = signal('');

  formResetPassword = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(private recoveryService: RecoveryService, private route: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        this.recoveryService.validateToken(token).subscribe({
          next: (response) => {
          },
          error: (error) => {
            this.router.navigate(['/recovery-expired']);
          }
        });
      } else {
        console.log('No token provided in query parameters');
      }
    });
  }
  onSubmit() {
    const dto: ResetPasswordDto = {
      token: this.route.snapshot.queryParamMap.get('token') || '',
      newPassword: this.formResetPassword.get('password')?.value || '',
      confirmPassword: this.formResetPassword.get('confirmPassword')?.value || ''
    };
    this.recoveryService.resetPassword(dto).subscribe({
      next: (response) => {
        console.log('Password reset successful:', response);
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        if (error.error?.message === 'Token inválido o expirado') {
          // Si el token es inválido o ha expirado, redirigimos a la página de token expirado
          this.router.navigate(['/recovery-expired']);
        } else if (error.error?.message === 'Las contraseñas no coinciden') {
          // Error de contraseñas que no coinciden
          this.backendError.set('Las contraseñas no coinciden');
        } else {
          // Cualquier otro error
          const apiError = error.error;
          if (apiError && apiError.details) {
            this.backendError.set(apiError.details['password'] || 'Error desconocido');
          } else {
            this.backendError.set('Ha ocurrido un error. Por favor, intenta de nuevo.');
          }
        }
      }
    });
  }

}
