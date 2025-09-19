import { Component, computed, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GameState } from '../../services/game-state';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class Header {

  userText = computed(() => {
    const user = this.gameState.nameUser();
    if (!user) return 'Invitado';
    return user.charAt(0).toUpperCase() + user.slice(1);
  });


  constructor(public gameState: GameState, public authService: AuthService, private router: Router) {
  }

  logoutAuth(){
    this.authService.logout().subscribe({
      next: (response) => {
        console.log('Logout successful:', response);
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        console.error('Logout error:', error);
      }
    })
  }

  
}
