import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { RecoveryService } from '../../shared/services/recovery/recovery-service';
import { ApiError } from '../register/model/api-error';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forgot.html',
  styleUrl: './forgot.css'
})
export class Forgot {

    backendError = signal('');
    backendSuccess = signal('');

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  constructor(private recoveryService: RecoveryService, private router: Router) { }



  sendRecoveryCode(){
    console.log(this.form.get('email')?.value);
    this.recoveryService.sendRecoveryEmail(this.form.get('email')?.value ?? '').subscribe({
      next: (response) => {
        console.log('Recovery email sent:', response);
        this.backendError.set('');
        this.backendSuccess.set("Le hemos enviado un email con las instrucciones para restablecer su contraseña.");
        setTimeout(() => {
            this.router.navigate(['/auth/login']);
          }, 3000);
      },
      error: (error) => {
        const apiError: ApiError = error.error;
        if (apiError && apiError.details) {
          console.log('Detalles del error:', apiError.details);
          this.backendError.set(apiError.details['email'] || 'Error desconocido'); 
        }
      }
    });
  }
}
