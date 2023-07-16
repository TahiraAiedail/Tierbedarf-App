import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-rechnungkunde',
  templateUrl: './rechnungkunde.component.html',
  styleUrls: ['./rechnungkunde.component.css']
})
export class RechnungkundeComponent implements OnInit {
  rechnungsdetails: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.ladeDetailierteRechnung();
  }

  ladeDetailierteRechnung(): void {
    const rechnungsnummer = this.route.snapshot.paramMap.get('Rechnungsnummer');
    const kundenID = this.authService.getKundenID();
    
    if (kundenID && rechnungsnummer) {
      this.http.get<any[]>(`/rechnungkundedetails/${rechnungsnummer}`)
        .subscribe(
          (response: any[]) => {
            const data = response.map((item) => ({
              Rechnungsnummer: item.Rechnungsnummer,
              Rechnungssumme: item.Rechnungssumme,
              Datum: item.Datum,
              Bestellnummer: item.Bestellnummer,
              RechnungsstatusID: item.RechnungsstatusID,
            }));
            this.rechnungsdetails = data; // Rechnungsdaten aktualisieren
            console.log(this.rechnungsdetails);
          },
          (error) => {
            console.error(error); // Fehlerbehandlung, falls der Aufruf fehlschlägt
          }
        );
    }
  }

  goBack() {
    this.router.navigate(['/rechnungsuebersichtkunde']);
  }
}
