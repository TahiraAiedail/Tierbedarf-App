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
  rechnungsdaten: any[] = [
    {
      Rechnungsnummer: 1,
      Rechnungsdatum: '2020-10-13',
      Rechnungssumme: 111.75,
      Rechnungsstatus: 'bezahlt'
    },
    {
      Rechnungsnummer: 2,
      Rechnungsdatum: '2021-04-03',
      Rechnungssumme: 206.88,
      Rechnungsstatus: 'bezahlt'
    },
    {
      Rechnungsnummer: 3,
      Rechnungsdatum: '2022-03-25',
      Rechnungssumme: 2.99,
      Rechnungsstatus: 'bezahlt'
    }
  ];

  constructor() {}

  ngOnInit(): void {
      
  }

  zeigeRechnungsdetails(rechnungsnummer: number): void {
    // Code zum Anzeigen der Rechnungsdetails
  }


/*export class RechnungsuebersichtkundeComponent implements OnInit {
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
          data => {
            this.rechnungsdaten = data;
          },
          error => {
            console.error('Fehler beim Laden der Rechnungsdaten:', error);
          }
        );
    }
  }
  zeigeRechnungsdetails(rechnungsnummer: number): void {
    this.router.navigate(['/rechnungkunde', rechnungsnummer]);
  }
}*/
}
