import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Game } from './pages/game/game';
import { Result } from './pages/result/result';
import { Rankings } from './pages/rankings/rankings';
import { MainLayout } from './layout/main-layout/main-layout';
import { RankingLayout } from './layout/ranking-layout/ranking-layout';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Recovery } from './pages/recovery/recovery';
import { guardAuthGuard } from './shared/services/guard-auth-guard';
import { Profile } from './pages/profile/profile';
import { ProfileLayout } from './layout/profile-layout/profile-layout';
import { ForgotPasswordLayout } from './layout/forgot-password-layout/forgot-password-layout';
import { Forgot } from './pages/forgot/forgot';
import { ResetPasswordLayout } from './layout/reset-password-layout/reset-password-layout';
import { RecoveryExpiredLayout } from './layout/recovery-expired-layout/recovery-expired-layout';
import { RecoveryExpired } from './pages/recovery-expired/recovery-expired';

export const routes: Routes = [
    {
    path: '',
    component: MainLayout,
    canActivate: [guardAuthGuard],
    children: [
      { path: '', component: Home },
      { path: 'game', component: Game },
      { path: 'result', component: Result }
    ]
  },
  {
    path: 'profile',
    component: ProfileLayout,
    canActivate: [guardAuthGuard],
    children: [
      {path: '', component: Profile}
    ]
  },
  {
    path: 'rankings',
    component: RankingLayout,
    canActivate: [guardAuthGuard],
    children: [
      { path: '', component: Rankings }
    ]
  },
  {
    path: 'auth',
    component: AuthLayout,
    children:[
      {path: 'login', component:Login},
      {path: 'register', component:Register},
    ]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordLayout,
    children:[
      {path: '', component:Forgot}
    ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordLayout,
    children:[
      {path: '', component: Recovery}
    ]
  },
  {
    path: 'recovery-expired',
    component: RecoveryExpiredLayout,
    children:[
      {path: '', component: RecoveryExpired}
    ]
  }
];
