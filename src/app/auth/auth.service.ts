import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  // zb wenn eine Seite aufgerufen wird, die Login erfordert. Dann wird danach auf diese Seite weitergeleitet
  redirectUrl: string | null = null;
 

  //Simulates an API call to an external service by returning an observable that resolves successfully after a short pause
  login(): Observable<boolean> {
      return of(true).pipe(
        delay(1000),
        tap(val => this.isLoggedIn = true)
      )
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
