import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.css']
})
export class WarenkorbComponent implements OnInit {
  warenkorb: any[] = [];

  constructor(private route: ActivatedRoute) { }

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

  zahlungsmethodeAuswaehlen(zahlungsmethode: string) {
    // Implementieren Sie die gewünschte Logik für die Auswahl der Zahlungsmethode
    console.log('Zahlungsmethode ausgewählt: ${zahlungsmethode}');
  }
}