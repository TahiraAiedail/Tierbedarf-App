import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tierheimtiere',
  templateUrl: './tierheimtiere.component.html',
  styleUrls: ['./tierheimtiere.component.css']
})

export class TierheimtiereComponent {

  public tierheimtiere: any = {
    animals: []
  };
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTierheimtiere(); // Aufruf der Methode bei Initialisierung der Komponente
  }

  getTierheimtiere() {
    console.log('getTierheimtiere() wird aufgerufen');

    this.http.get<any[]>('/tierheimtiere').subscribe(
      (response: any[]) => {
        const fetchedTierheimtiere = response.map((item) => ({
          tierID: item.tierID,
          name: item.Name,
          type: item.Tierart,
          breed: item.Rasse,
          gender: item.Geschlecht,
          age: item.Geburtsdatum,
          description: item.Beschreibung,
          image: 'assets/images/' + item.Name + '.jpg', // Stelle sicher, dass die Bilder im assets/images-Ordner vorhanden sind
        }));
        this.tierheimtiere.animals = fetchedTierheimtiere;
        console.log('Tierheimdaten: ', this.tierheimtiere);
  
        fetchedTierheimtiere.forEach((animal) => {
          console.log('Bilderpfad:', animal.image);
        });
      },
      (error: any) => {
        console.error('Fehler beim Abrufen der Tierdaten:', error);
      }
    );
  }
  
  openFormular(name: string, breed: string, tierID: number) {
    // Öffne die neue Seite mit dem Formular und übergebe den Namen, die Rasse und die TierID als Parameter
    window.open('/formular?name=' + name + '&breed=' + breed + '&tierID=' + tierID, '_blank');
  }
  
}


