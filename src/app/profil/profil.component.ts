import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})


export class ProfilComponent {

  constructor(private http: HttpClient) {
    this.getUserdaten();
  }

  /**
   * Holt die Daten eines eingeloggten Users aus der Datenbank.
   * Wird für die Userverwaltung benötigt.
   */
  userdaten: any;
  getUserdaten(): void {
    // TODO usernummer ist kundennummer oder personalnummer. Aus der Session holen 
    var userID = 9000021;

    // Überprüft, ob User Kunde oder Mitarbeiter ist
    var userdatenUrl = (9000000 < userID && userID < 10000000) ? "kundendaten" : "mitarbeiterdaten";

    this.http.get(userdatenUrl).subscribe((data) => {
      this.userdaten = data;
    }); 
  }

}
