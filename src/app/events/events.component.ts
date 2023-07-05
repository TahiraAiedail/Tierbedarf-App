import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  
  public veranstaltungen: any = {
    events: []
  };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getEvents(); // Aufruf der Methode bei Initialisierung der Komponente
  }

  getEvents() {
    console.log('getEvents() wird aufgerufen');

    this.http.get<any[]>('/event').subscribe(
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

  goToRegistration(eventId: number) {
    this.router.navigate(['/registration'], { queryParams: { eventId: eventId } });
  }

  formatDate(dateStr: string): string {
    let date = new Date(dateStr);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
}


