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
    this.getWaren();
  }

  getWaren() {
    this.shopService.getWaren().subscribe(
      (response: any[]) => {
        this.waren = response;
      },
      (error: any) => {
        console.error('Fehler beim Abrufen der Waren:', error);
      }
    );
  }
  bestellen(ware: any) {
    //Logik fehlt noch
    console.log(`Bestellung für ${ware.Bezeichnung} erhalten.`);
  }
}
