import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AnmeldungComponent } from './anmeldung/anmeldung.component';
import { LoginComponent } from './anmeldung/login/login.component';
import { registrierungComponent } from './anmeldung/registrierung/registrierung.component';
import { TierheimtiereComponent } from './tierheimtiere/tierheimtiere.component';
import { EventsComponent } from './events/events.component';
import { ProduktkatalogComponent } from './produktkatalog/produktkatalog.component';
import { QuizComponent } from './quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'Anmeldung', component: AnmeldungComponent},
  { path: 'tierheimtiere', component: TierheimtiereComponent },
  { path: 'events', component: EventsComponent },
  { path: 'produktkatalog', component: ProduktkatalogComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrierung', component: registrierungComponent },
  {path:  '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
