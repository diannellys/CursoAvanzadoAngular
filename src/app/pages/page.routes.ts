import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';



export const pagesRoutes: Routes = [
  {path: '', component:PagesComponent, children: [

      {path: 'dashboard', component:DashboardComponent},
      {path: 'grafica1', component:Grafica1Component},
      {path: 'progress', component:ProgressComponent},
  ]},

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);





