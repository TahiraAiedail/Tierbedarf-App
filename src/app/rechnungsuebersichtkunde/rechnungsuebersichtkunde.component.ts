import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rechnungsuebersichtkunde',
  templateUrl: './rechnungsuebersichtkunde.component.html',
  styleUrls: ['./rechnungsuebersichtkunde.component.css']
})


export class RechnungsuebersichtkundeComponent implements OnInit {
  rechnungsdaten: any[] = [];

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.ladeRechnungsdaten();
  }

  ladeRechnungsdaten(): void {
    const kundenID = this.authService.getKundenID();
    if (kundenID) {
      this.http.get<any[]>('/rechnungkundeuebersicht')
        .subscribe(
          (response: any[]) => {
            const data = response.map((item) => ({
              Rechnungsnummer: item.Rechnungsnummer,
              Datum: item.Datum,
              Rechnungssumme: item.Rechnungssumme,
              Rechnungsstatusid: item.RechnungsstatusID,
            }));
            this.rechnungsdaten = data; // Rechnungsdaten aktualisieren
            console.log(this.rechnungsdaten)
          },
          error => {
            console.error(error); // Fehlerbehandlung, falls der Aufruf fehlschlägt
          }
        );
    }
  }
  
  
  zeigeRechnungsdetails(rechnungsnummer: number): void {
    this.router.navigate(['/rechnungkunde', rechnungsnummer]);
  }
}

