import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.css']
})
export class WarenkorbComponent implements OnInit {
  warenkorb: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getWarenkorb();
  }

  getWarenkorb() {
    // Hier können Sie die Produkte aus dem Warenkorb abrufen, z.B. von einer Datenbank oder einem Service
    // In diesem Beispiel verwenden wir eine statische Datenquelle
    this.warenkorb = [
      { Bezeichnung: 'Produkt 1', quantity: 2, Preis: 9.99, bild: 'produkt1.jpg' },
      { Bezeichnung: 'Produkt 2', quantity: 1, Preis: 14.99, bild: 'produkt2.jpg' },
      { Bezeichnung: 'Produkt 3', quantity: 3, Preis: 5.99, bild: 'produkt3.jpg' }
    ];
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
    console.log(`Zahlungsmethode ausgewählt: ${zahlungsmethode}`);
  }
  
}
