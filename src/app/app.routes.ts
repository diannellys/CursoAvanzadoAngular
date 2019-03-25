import { RegisterComponent } from './login/register/register.component';
import { PagesComponent } from './pages/pages.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { Grafica1Component } from './pages/grafica1/grafica1.component';

export const appRoutes: Routes = [
  {path: '', component:PagesComponent, children: [

      {path: 'dashboard', component:DashboardComponent},
      {path: 'grafica1', component:Grafica1Component},
      {path: 'progress', component:ProgressComponent},
  ]},

 {path: 'register', component: RegisterComponent},
 {path: 'login', component:LoginComponent},
{path: '', redirectTo:'pages/dashboard', pathMatch:'full'}
  // {path: '**', component:NopagefoundComponent}
];

export const APP_ROUTES=RouterModule.forRoot(appRoutes,{useHash:true});


/*   {
    path: '',
    redirectTo: 'sessions/signin', //sessions/signin
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: './views/sessions/sessions.module#SessionsModule',
        data: { title: 'Session' }
      }
    ]
  },
  {
    path: 'home',
    component: AdminLayoutComponent,
    canActivate : [AuthGuard],
    children:  [

    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }, */


