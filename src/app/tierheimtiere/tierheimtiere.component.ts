import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tierheimtiere',
  templateUrl: './tierheimtiere.component.html',
  styleUrls: ['./tierheimtiere.component.css']
})

export class TierheimtiereComponent implements OnInit{

  public tierheimtiere: any = {
    animals: []
  };
  
  
  
    /*  {
        name: 'Max',
        type: 'Hund',
        breed: 'Labrador Retriever',
        gender: 'männlich',
        age: '3 Jahre',
        description: 'Max ist ein aktiver und freundlicher Hund, der gerne draußen spielt und spazieren geht. Er liebt es, mit Kindern zu spielen und ist sehr gutmütig. Max ist bereits stubenrein und kennt einige Grundkommandos. Er würde sich gut in einer Familie mit Kindern oder aktiven Erwachsenen eignen.',
        image: 'assets/images/Max_Labrador.jpg',
      },
      {
        name: 'Oreo',
        type: 'Katze',
        breed: 'Europäisch Kurzhaar',
        gender: 'weiblich',
        age: '2 Jahre',
        description: 'Oreo ist eine süße und schüchterne Katze, die gerne in ihrem Versteck bleibt. Sie liebt es, gestreichelt zu werden, sobald sie Vertrauen aufgebaut hat. Oreo ist bereits kastriert und stubenrein. Sie würde sich gut in einem ruhigen Haushalt eignen, ohne kleine Kinder oder andere Haustiere.',
        image: 'assets/images/Oreo_Katze.jpg',
      },
      {
        name: 'Nemo',
        type: 'Kaninchen',
        breed: 'Zwergkaninchen',
        gender: 'männlich',
        age: '1 Jahr',
        description: 'Nemo ist ein süßes und neugieriges Kaninchen, das gerne hüpft und spielt. Er ist bereits kastriert und stubenrein. Nemo braucht viel Platz und Bewegung, daher wäre ein großer Käfig oder ein Freigehege ideal für ihn. Er würde sich gut in einer Familie mit älteren Kindern oder als Begleiter für ein anderes Kaninchen eignen.',
        image: 'assets/images/Nemo_Kaninchen.jpg',
      },
      {
        name: 'Cookie',
        type: 'Meerschweinchen',
        breed: 'Glatthaar-Meerschweinchen',
        gender: 'weiblich',
        age: '1 Jahr',
        description: 'Cookie ist ein süßes und verspieltes Meerschweinchen, das gerne kuschelt und gestreichelt wird. Sie ist bereits kastriert und stubenrein. Cookie braucht viel Platz und Bewegung, daher wäre ein großer Käfig oder ein Freigehege ideal für sie. Sie würde sich gut in einer Familie mit Kindern oder als Begleiter für ein anderes Meerschweinchen eignen.',
        image: 'assets/Cookie_Meerschweinchen.jpg',
      },
      {
        name: 'Rio',
        type: 'Vogel',
        breed: 'Wellensittich',
        gender: 'männlich',
        age: '1 Jahr',
        description: 'Rio ist ein lebhafter und neugieriger Wellensittich, der gerne zwitschert und spielt. Er ist bereits zahm und kann auf die Hand genommen werden. Rio braucht viel Platz und Bewegung, daher wäre ein großer Käfig oder ein Freiflugzimmer ideal für ihn. Er würde sich gut als Begleiter für einen anderen Wellensittich oder als Haustier für jemanden, der viel Zeit für ihn hat, eignen.',
        image: 'assets/Rio_Wellensittich.jpg',
      },*/
    
  
  

 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTierheimtiere(); // Aufruf der Methode bei Initialisierung der Komponente
  }

  getTierheimtiere() {
    console.log('getTierheimtiere() wird aufgerufen');

    this.http.get<any[]>('/tierheimtiere2').subscribe(
      (response: any[]) => {
        const fetchedTierheimtiere = response.map((item) => ({
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


