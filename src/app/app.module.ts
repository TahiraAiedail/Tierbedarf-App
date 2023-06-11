import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';



import { TierheimtiereComponent } from './tierheimtiere/tierheimtiere.component';
import { EventsComponent } from './events/events.component';
import { ProduktkatalogComponent } from './produktkatalog/produktkatalog.component';
import { QuizComponent } from './quiz/quiz.component';
import { AnmeldungComponent } from './anmeldung/anmeldung.component';
import { LoginComponent } from './anmeldung/login/login.component';
import { registrierungComponent } from './anmeldung/registrierung/registrierung.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TierheimtiereComponent,
    EventsComponent,
    ProduktkatalogComponent,
    QuizComponent,
    AnmeldungComponent,
    LoginComponent,
    registrierungComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
