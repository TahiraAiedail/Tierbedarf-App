import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string | null = null;
  kundenID: number | null = null;
  vorname: string | null = null;
  benutzername: string | null = null;
  nachname: string | null = null;
  geburtsdatum: string | null = null;
  telefonnummer: number | null = null;
  email: string | null = null;
  passwort: string | null = null;
  strasse: string | null = null;
  hausnummer: number | null = null;
  stadt: string | null = null;
  plz: number | null = null;
  usertyp: string | null = null;
  

  constructor(private http: HttpClient, private router: Router) {}
  login(email: string, password: string): Observable<any> {
    const previousUrl = this.router.url; 
    
    return this.http.post<any>('/loginKundee', { email, password }).pipe(
      tap(response => {
        if (response.status === 'success') {
          this.isLoggedIn = true;
          this.kundenID = response.data.KundenID;
          this.vorname = response.data.Vorname;
          this.nachname = response.data.Nachname;
          this.setUserTyp(response.data.EMail);
          if (this.usertyp?.match("kunde")) {
            this.benutzername = response.data.Benutzername;
          } else if (this.usertyp?.match("mitarbeiter")) {
            console.log("Ist Mitarbeiter");
            this.benutzername = this.vorname + " " + this.nachname;
          } else {
            console.log("ist nix");
          }
          this.geburtsdatum = this.formatDate(response.data.Geburtsdatum); // Formatieren des Geburtsdatums
          this.telefonnummer = response.data.Telefonnummer;
          this.email = response.data.EMail;
          this.hausnummer = response.data.Hausnummer;
          this.stadt = response.data.Stadt;
          this.plz = response.data.PLZ;
          // Laden der Benutzerdetails aus der Datenbank
          console.log('Login erfolgreich, Benutzername: ', this.benutzername);
  
          this.redirectUrl = previousUrl; // Speichern des zuletzt besuchten Pfads
  
          const redirect = this.redirectUrl ? this.router.parseUrl(this.redirectUrl) : 'home';
          this.router.navigateByUrl(redirect); // Weiterleitung zur vorherigen URL oder zur Startseite
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
    getUserTyp(): string | null {
      return this.usertyp;
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
      if (this.redirectUrl) {
        this.router.navigateByUrl(this.redirectUrl); 
      }else{
        this.router.navigateByUrl('home'); 
      }
    }

    setUserTyp(email: string): void {
      const result = email.split('@');
      if(result[1] === 'tierbedarf-knut.de'){
        this.usertyp = 'mitarbeiter'
      }else{
        this.usertyp = 'kunde'
      }
    }
    isKunde(): boolean {
      return this.usertyp === 'kunde';
    }
  
    isMitarbeiter(): boolean {
      return this.usertyp === 'mitarbeiter';
    }
}
