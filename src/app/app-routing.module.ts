import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TierheimtiereComponent } from './tierheimtiere/tierheimtiere.component';
import { EventsComponent } from './events/events.component';
import { ProduktkatalogComponent } from './produktkatalog/produktkatalog.component';
import { QuizComponent } from './quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { KennenlernformularComponent } from './kennenlernformular/kennenlernformular.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { AnmeldeformulareventComponent } from './anmeldeformularevent/anmeldeformularevent.component';
import { KennenlernbestaetigungComponent } from './kennenlernbestaetigung/kennenlernbestaetigung.component';
import { RechnungkundeComponent } from './rechnungkunde/rechnungkunde.component';
import { RechnungsuebersichtkundeComponent } from './rechnungsuebersichtkunde/rechnungsuebersichtkunde.component';
import { ErsatzfuerregComponent } from './ersatzfuerreg/ersatzfuerreg.component';


const routes: Routes = [
  { path: 'tierheimtiere', component: TierheimtiereComponent },
  { path: 'events', component: EventsComponent },
  { path: 'produktkatalog', component: ProduktkatalogComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'kennenlernformular', component: KennenlernformularComponent },
  { path: 'home', component: HomeComponent},
  { path: 'profil', component: ProfilComponent},
  { path: 'login', component: LoginComponent},
  { path: 'anmeldeformularevent', component: AnmeldeformulareventComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'kennenlernbestaetigung', component: KennenlernbestaetigungComponent},
  { path: 'rechnungkunde', component: RechnungkundeComponent},
  { path: 'rechnungsuebersichtkunde', component: RechnungsuebersichtkundeComponent},
  { path: 'testnr2', component: ErsatzfuerregComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


// { path: 'profil', component: ProfilComponent, canActivate: [authGuard]},