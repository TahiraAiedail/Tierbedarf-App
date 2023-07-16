import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tierbedarf-App';

  isSubMenuOpen: boolean = false;

  constructor(private router: Router, public authService: AuthService) {}

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  navigateToBestellungsuebersicht(): void {
    const kundenID = this.authService.getKundenID();
    console.log('Kunden-ID:', kundenID); // Konsolenausgabe
    if (kundenID) {
      this.router.navigate(['/rechnungsuebersicht', kundenID]);
    }
  }

  isKundeLoggedIn(): boolean {
    // Rufe den Login-Status ab
    if (this.authService.isLoggedIn && this.authService.getUserTyp() === 'kunde') {
      return true;
    } else {
      return false;
    }
  }

  isMitarbeiterLoggedIn(): boolean {
    // Rufe den Login-Status ab
    if (this.authService.isLoggedIn && this.authService.getUserTyp() === 'mitarbeiter') {
      return true;
    } else {
      return false;
    }
  }
}
