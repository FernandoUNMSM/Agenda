import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { routing, appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AgendaPComponent } from './agendaP/agenda.component';
import { HeaderComponent } from './header/header.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { HomeComponent } from './home/home.component';
import { IngresoComponent } from './ingreso/ingreso.component';


@NgModule({
  declarations: [
    AppComponent,
    AgendaPComponent,
    HeaderComponent,
    PomodoroComponent,
    HomeComponent,
    IngresoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    FontAwesomeModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
