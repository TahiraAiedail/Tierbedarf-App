import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
import { LoginComponent } from './anmeldung/login/login.component';
import { AnmeldeformulareventComponent } from './anmeldeformularevent/anmeldeformularevent.component';



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
    ProfilComponent,
    LoginComponent,
    AnmeldeformulareventComponent
  ],

  
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
