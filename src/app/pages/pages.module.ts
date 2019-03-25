import { SharedModule } from './../shared/shared.module';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PAGES_ROUTES } from './page.routes';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent

  ],
  imports:[SharedModule,PAGES_ROUTES]

})
export class PagesModule { }
