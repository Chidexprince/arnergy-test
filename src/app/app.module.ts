import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FootballComponent } from './components/football/football.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HeaderComponent } from './components/tag/header/header.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { WakatimeComponent } from './components/wakatime/wakatime.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FootballComponent,
    ErrorPageComponent,
    HeaderComponent,
    DoctorsComponent,
    WakatimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
