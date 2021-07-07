import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FootballComponent } from './components/football/football.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { WakatimeComponent } from './components/wakatime/wakatime.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'football-details', pathMatch: 'full', component: FootballComponent },
  { path: 'doctors', pathMatch: 'full', component: DoctorsComponent },
  { path: 'wakatime', pathMatch: 'full', component: WakatimeComponent },
  { path: '**', pathMatch: 'full', component: ErrorPageComponent, }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
