import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Ist für Anfragen wie GET / PUT / POST zuständig
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  myTest:any;
  
  public veranstaltungen: any = {
    events: []
  };

  public tierheimtiere: any = {
    animals: []
  };

  constructor(private http: HttpClient,private router: Router) {
  };

  
  ngOnInit(): void {
    this.getEvents();
    this.getLatestTierheimtier(); // Aufruf der Methode bei Initialisierung der Komponente
  }

  getEvents() {
    console.log('getEvents() wird aufgerufen');

    this.http.get<any[]>('/nextevent').subscribe(
      (response: any[]) => { 
        const fetchedEvents = response.map((item) => ({
          eventID: item.EventID,
          title: item.Name,
          theme: item.Thema,
          date: this.formatDate(item.Datum),
          description: item.Beschreibung
        }));
        this.veranstaltungen.events = fetchedEvents;  
         console.log('Events: ', this.veranstaltungen);
      },
      (error: any) => {
        console.error('Fehler beim Abrufen der Event-Daten:', error);
      }
    );
  }


  formatDate(dateStr: string): string {
    let date = new Date(dateStr);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  goToRegistration(eventId: number) {
    this.router.navigate(['/registration'], { queryParams: { eventId: eventId } });
  }


  getLatestTierheimtier() {
    console.log('getLatestTierheimtier() wird aufgerufen');
  
    this.http.get<any[]>('/letztestierheimtier').subscribe(
      (response: any[]) => {
        const fetchedTierheimtiere = response.map((item) => ({
          tierID: item.TierID,
          name: item.Name,
          type: item.Tierart,
          breed: item.Rasse,
          gender: item.Geschlecht,
          age: this.formatDate(item.Geburtsdatum), // Formatieren des Geburtsdatums
          description: item.Beschreibung,
          image: 'assets/images/' + item.Name + '_'+ item.Tierart + '.jpg', // Stelle sicher, dass die Bilder im assets/images-Ordner vorhanden sind
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
    this.router.navigate(['/kennenlernformular'], { 
      queryParams: { name: name, breed: breed, tierID: tierID } 
    });
  
}

}

