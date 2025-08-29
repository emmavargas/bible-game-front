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

export const routes: Routes = [
    
    
    /*{
        path: '',component: Home
    },
    {
        path: 'game', component: Game
    },
    {
        path: 'result', component: Result 
    },
    {
        path: 'rankings', component: Rankings
    }*/

    {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'game', component: Game },
      { path: 'result', component: Result }
    ]
  },
  {
    path: 'rankings',
    component: RankingLayout,
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
      {path: 'recovery',component:Recovery}
    ]

  }
];
