import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string | null = null;
  benutzername: string | null = null; 
  kundenID: number | null = null;
  nachname: string | null = null;
  geburtsdatum: string | null = null;
  telefonnummer: number | null = null;
  email: string | null = null;
  passwort: string | null = null;
  strasse: string | null = null;
  hausnummer: number | null = null;
  stadt: string | null = null;
  plz: number | null = null;


  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('/login', { email, password }).pipe(
      tap(response => {
        if (response.status === 'success') {
          this.isLoggedIn = true;
          this.kundenID = response.data.KundenID;
          this.benutzername = response.data.Benutzername;
          this.nachname = response.data.Nachname;
          this.geburtsdatum = this.formatDate(response.data.Geburtsdatum), // Formatieren des Geburtsdatums
          this.telefonnummer = response.data.Telefonnummer;
          this.email = response.data.EMail;
          this.passwort = response.data.Passwort;
          this.strasse = response.data.Straße;
          this.hausnummer = response.data.Hausnummer;
          this.stadt = response.data.Stadt;
          this.plz = response.data.PLZ;
          
          console.log('Login erfolgreich, Benutzername: ', this.benutzername);
        } else {
          console.log('Login fehlgeschlagen, Antwort: ', response);
        }
      }),
      catchError(err => {
        console.log('Fehler beim Login: ', err);
        return throwError(err);
      })
    );
  }
  
  getKundenID(): number | null {
    return this.kundenID;
  }
  
  getBenutzername(): string | null {
    return this.benutzername;
  }
  
  getNachname(): string | null {
    return this.nachname;
  }
  
  getGeburtsdatum(): string | null {
    return this.geburtsdatum;
  }
  
  getTelefonnummer(): number | null {
    return this.telefonnummer;
  }
  
  getEmail(): string | null {
    return this.email;
  }
  
  getPasswort(): string | null {
    return this.passwort;
  }
  
  getStrasse(): string | null {
    return this.strasse;
  }
  
  getHausnummer(): number | null {
    return this.hausnummer;
  }
  
  getStadt(): string | null {
    return this.stadt;
  }
  
  getPLZ(): number | null {
    return this.plz;
  }
  

  formatDate(dateStr: string): string {
    let date = new Date(dateStr);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.benutzername='';
  }
}
