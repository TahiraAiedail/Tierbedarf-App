import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { TierheimtiereComponent } from './tierheimtiere/tierheimtiere.component';
import { EventsComponent } from './events/events.component';
import { ProduktkatalogComponent } from './produktkatalog/produktkatalog.component';
import { QuizComponent } from './quiz/quiz.component';
import { AnmeldungComponent } from './anmeldung/anmeldung.component';
import { registrierungComponent } from './anmeldung/registrierung/registrierung.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KennenlernformularComponent } from './kennenlernformular/kennenlernformular.component';
import { ShopService } from './shop.service';
import { ProfilComponent } from './profil/profil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    TierheimtiereComponent,
    EventsComponent,
    ProduktkatalogComponent,
    QuizComponent,
    AnmeldungComponent,
    registrierungComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    KennenlernformularComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
