import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { AuthService } from '../auth/auth.service';
import { ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})


export class ProfilComponent {

  @ViewChild('oldPasswordInput') oldPasswordInput!: ElementRef;
  @ViewChild('newPasswordInput') newPasswordInput!: ElementRef;

  public bestellungen: any = {
    bestellungen: []
  };

  user = {
    benutzername: this.authService.getBenutzername(),
    kundenID: this.authService.getKundenID(),
    vorname: this.authService.getVorname(),
    nachname: this.authService.getNachname(),
    geburtsdatum:this.authService.getGeburtsdatum(),
    telefonnummer: this.authService.getTelefonnummer(),
    email: this.authService.getEmail(),
    passwort: this.authService.getPasswort(),
    strasse: this.authService.getStrasse(),
    hausnummer: this.authService.getHausnummer(),
    stadt: this.authService.getStadt(),
    plz: this.authService.getPLZ()

  };

  ngOnInit(): void {
    this.getBestellungen();
  }

  getBestellungen() {
    console.log('getBestellungen() wird aufgerufen');
    this.http.get<any[]>('/bestellung/${this.user.kundenID}').subscribe(
      (response: any[]) => {
        const fetchedBestellungen = response.map((item) => ({
          bestellnummer: item.Bestellnummer,
          datum: this.formatDate(item.Datum),
          bestellartID: item.BestellartID,
          mitarbeiterID: item.MitarbeiterID,
          kundenID: item.KundenID
        }));
        this.bestellungen = fetchedBestellungen;
        console.log('Bestellungen:', this.bestellungen);
      },
      (error: any) => {
        console.error('Fehler beim Abrufen der Bestellungen:', error);
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

  constructor(private http: HttpClient,private authService: AuthService,private snackBar: MatSnackBar) {
  }

  submitForm(): void{

  }

  submitFormPasswort(): void {
    // Überprüfen, ob das eingegebene alte Passwort mit dem gespeicherten alten Passwort übereinstimmt
    if (this.oldPasswordInput.nativeElement.value !== this.authService.getPasswort()) {
      this.snackBar.open('Das eingegebene alte Passwort stimmt nicht überein', 'OK', { duration: 3000 });
      console.log('Das eingegebene alte Passwort ist nicht korrekt.');
    }else{

    }
  
  }


}
