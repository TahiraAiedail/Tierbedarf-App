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

  constructor(private router: Router, public authService: AuthService) {}

  navigateToBestellungsuebersicht(): void {
    const kundenID = this.authService.getKundenID();
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
}
