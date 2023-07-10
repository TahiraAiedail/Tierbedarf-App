import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-produktkatalog',
  templateUrl: './produktkatalog.component.html',
  styleUrls: ['./produktkatalog.component.css']
})
export class ProduktkatalogComponent implements OnInit {
  waren: any[] = [];
  warenkorb: any[] = [];

  constructor(private router: Router, private shopService: ShopService) { }

  ngOnInit(): void {
    this.getWaren();
  }

  getWaren() {
    this.shopService.getWaren().subscribe(
      (response: any[]) => {
        const fetchedWaren = response.map((item) => ({
          warenID: item.WarenID,
          Bezeichnung: item.Bezeichnung,
          beschreibung: item.Beschreibung,
          Preis: item.Preis,
          Lagerbestand: item.Lagerbestand,
          bild: '../assets/images/' + item.Bezeichnung + '.jpg',
        }));

        this.waren = fetchedWaren;
      },
      (error: any) => {
        console.error('Fehler beim Abrufen der Waren:', error);
      }
    );
  }

  bestellen(ware: any) {
    const bestellterArtikel = {
      ...ware,
      quantity: ware.quantity || 0
    };

    if (bestellterArtikel.quantity > 0) {
      if (bestellterArtikel.quantity <= bestellterArtikel.Lagerbestand) {
        this.warenkorb.push(bestellterArtikel);
        console.log(`Bestellung für ${ware.Bezeichnung} erhalten.`);
      } else {
        console.log(`Bestellung für ${ware.Bezeichnung} nicht möglich. Lagerbestand überschritten.`);
        alert(`Bestellung für ${ware.Bezeichnung} nicht möglich. Lagerbestand überschritten.`);
      }
    }
  }

  getGesamtsumme() {
    let gesamtsumme = 0;
    for (const artikel of this.warenkorb) {
      gesamtsumme += artikel.Preis * artikel.quantity;
    }
    return gesamtsumme;
  }

  bezahlen() {
    this.router.navigate(['/warenkorb']);
  }
  
}
