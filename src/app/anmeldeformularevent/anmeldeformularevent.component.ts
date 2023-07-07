import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-anmeldeformularevent',
  templateUrl: './anmeldeformularevent.component.html',
  styleUrls: ['./anmeldeformularevent.component.css']
})
export class AnmeldeformulareventComponent {

  user = {
  kundenID: this.authService.getKundenID(),
  nachname: this.authService.getNachname(),
  telefonnummer: this.authService.getTelefonnummer(),
  email:this.authService.getEmail(),
  };

  private snackBar!: MatSnackBar;

  public eventid!: number;
  public eventname!: string;
  public eventdatum!: string;


  ngOnInit(): void {
    console.log('ngOnInit aufgerufen');
    this.route.queryParams.subscribe(params => {
      this.eventid = params['eventid'];
      this.eventname = params['eventname'];
      this.eventdatum = params['eventdatum']
        });
      }


 constructor(private route: ActivatedRoute,private http: HttpClient, private router: Router,private authService: AuthService) { }

 submitForm(): void {

  const requestData = {
    KundenID: this.user.kundenID,
    EventID: this.eventid
  };
    // HTTP-Anfrage an den Server senden
  this.http.post('/eventteilnehmerliste',requestData).subscribe(
  (response) => {
    // Erfolgreiche Antwort vom Server erhalten
    console.log('Erfolgreich eingefügt:', response);
    this.snackBar.open('Anmeldung erfolgreich!', 'OK', { duration: 3000 });
  },
  (error) => {
    // Fehler beim Senden der Anfrage oder beim Verarbeiten der Antwort
    console.error('Fehler beim Einfügen:', error);
  }
);
  this.router.navigate(['/events']);
 }
}