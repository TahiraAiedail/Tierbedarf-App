import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-produktkatalog',
  templateUrl: './produktkatalog.component.html',
  styleUrls: ['./produktkatalog.component.css']
})

export class ProduktkatalogComponent implements OnInit {
  waren: any[] = [];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getWaren(); // Aufruf der Methode bei Initialisierung der Komponente
  }

  getWaren() {
    console.log('getWaren() wird aufgerufen');

    this.shopService.getWaren().subscribe(
      (response: any[]) => {
        const fetchedWaren = response.map((item) => ({
        warenID: item.WarenID,
        Bezeichnung: item.Bezeichnung,
        beschreibung: item.Beschreibung,
        Preis: item.Preis,
        bild: '../assets/images/' + item.Bezeichnung + '.jpg', // Stelle sicher, dass die Bilder im assets/images-Ordner vorhanden sind
        }));

        this.waren = fetchedWaren;
        console.log('Waren: ', this.waren);

        fetchedWaren.forEach((waren) => {
          console.log('Bilderpfad:', waren.bild);
        });
      }, 
      (error: any) => {
        console.error('Fehler beim Abrufen der Waren:', error);
      }
    );
  }

  logWaren(waren : any)
{
  console.log(waren);

}  bestellen(ware: any) {
    //Logik fehlt noch
    console.log(`Bestellung für ${ware.Bezeichnung} erhalten.`);
  }
}
