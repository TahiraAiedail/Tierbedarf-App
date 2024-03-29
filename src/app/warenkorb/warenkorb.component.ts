import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.css']
})
export class WarenkorbComponent implements OnInit {
  warenkorb: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shopService: ShopService
  ) { }

  ngOnInit(): void {
    this.getWarenkorb();
  }

  getWarenkorb() {
    this.route.queryParams.subscribe(params => {
      if (params && params['warenkorb']) {
        this.warenkorb = JSON.parse(params['warenkorb']);
      } else {
        // Fallback, wenn keine Warenkorb-Daten vorhanden sind
        this.warenkorb = [];
      }
    });
  }

  getGesamtsumme() {
    let gesamtsumme = 0;
    for (const artikel of this.warenkorb) {
      gesamtsumme += artikel.Preis * artikel.quantity;
    }
    return gesamtsumme.toFixed(2);
  }

  zahlungsmethodeAuswaehlen(zahlungsart: string) {
    // Implementieren Sie die gewünschte Logik für die Auswahl der Zahlungsmethode
    console.log(`Zahlungsart ausgewählt: ${zahlungsart}`);
  }

  bestellmethodeAuswaehlen(bestellmethode: string) {
    console.log(`Bestellmethode ausgewählt: ${bestellmethode}`);
  }

  bestellungAbschliessen() {
    // Hier wird der Alert mit der Nachricht "Bestellung erfolgreich" angezeigt
    alert('Die Bestellung war erfolgreich');

    // Weiterleitung zur Home-Seite
    this.router.navigate(['']); // Geben Sie hier den Pfad zur Home-Seite an
  }
}


  /*bestellungAbschliessen() {
    // Daten für die Bestellung zusammenstellen
    const zahlungsart = 'gewählte Zahlungsart'; // Hier den tatsächlichen Wert verwenden
    const bestellung = {
      zahlungsart,
      warenkorb: this.warenkorb
    };
  
    // Bestellung an den ShopService senden
    this.shopService.createBestellung(bestellung).subscribe(
      (bestellungsnummer) => {
        console.log('Bestellung wurde abgeschlossen. Bestellungsnummer:', bestellungsnummer);
  
        // Erfolgsmeldung anzeigen
        alert('Die Bestellung wurde erfolgreich abgeschlossen.');
  
        // Weitere Logik für die Bestellungsabwicklung hier...
      },
      (error) => {
        console.error('Fehler beim Abschließen der Bestellung:', error);
        // Behandeln Sie den Fehler entsprechend
      }
    );
  }*/
  




