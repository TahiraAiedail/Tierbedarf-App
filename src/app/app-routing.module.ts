import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnmeldungComponent } from './anmeldung/anmeldung.component';
import { registrierungComponent } from './anmeldung/registrierung/registrierung.component';
import { TierheimtiereComponent } from './tierheimtiere/tierheimtiere.component';
import { EventsComponent } from './events/events.component';
import { ProduktkatalogComponent } from './produktkatalog/produktkatalog.component';
import { QuizComponent } from './quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { KennenlernformularComponent } from './kennenlernformular/kennenlernformular.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './anmeldung/login/login.component';



const routes: Routes = [
  { path: 'Anmeldung', component: AnmeldungComponent},
  { path: 'tierheimtiere', component: TierheimtiereComponent },
  { path: 'events', component: EventsComponent },
  { path: 'produktkatalog', component: ProduktkatalogComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'registrierung', component: registrierungComponent },
  { path: 'kennenlernformular', component: KennenlernformularComponent },
  { path: 'home', component: HomeComponent},
  { path: 'profil', component: ProfilComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


// { path: 'profil', component: ProfilComponent, canActivate: [authGuard]},