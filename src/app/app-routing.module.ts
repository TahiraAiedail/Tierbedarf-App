import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

import { AnmeldungComponent } from './anmeldung/anmeldung.component';
import { LoginComponent } from './anmeldung/login/login.component';
import { registrierungComponent } from './anmeldung/registrierung/registrierung.component';
import { TierheimtiereComponent } from './tierheimtiere/tierheimtiere.component';
import { EventsComponent } from './events/events.component';
import { ProduktkatalogComponent } from './produktkatalog/produktkatalog.component';
import { QuizComponent } from './quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { KennenlernformularComponent } from './kennenlernformular/kennenlernformular.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';



const routes: Routes = [
  { path: 'Anmeldung', component: AnmeldungComponent},
  { path: 'tierheimtiere', component: TierheimtiereComponent },
  { path: 'events', component: EventsComponent },
  { path: 'produktkatalog', component: ProduktkatalogComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrierung', component: registrierungComponent },
  { path: 'kennenlernformular', component: KennenlernformularComponent },
  { path: 'home', component: HomeComponent},
 // { path: 'profil', component: ProfilComponent, canActivate: [authGuard]},
  { path: 'profil', component: ProfilComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
