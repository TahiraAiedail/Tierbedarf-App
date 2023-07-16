import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-tierheimtiere',
  templateUrl: './tierheimtiere.component.html',
  styleUrls: ['./tierheimtiere.component.css']
})

export class TierheimtiereComponent {

  public tierheimtiere: any = {
    animals: []
  };
  
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.getTierheimtiere(); 
  }

  getTierheimtiere() {
    console.log('getTierheimtiere() wird aufgerufen');

    this.http.get<any[]>('/tierheimtiere').subscribe(
      (response: any[]) => {
        const fetchedTierheimtiere = response.map((item) => ({
          tierID: item.TierID,
          tiername: item.Name,
          type: item.Tierart,
          breed: item.Rasse,
          gender: item.Geschlecht,
          age: this.formatDate(item.Geburtsdatum), 
          description: item.Beschreibung,
          image: 'assets/images/' + item.Name + '_'+ item.Tierart + '.jpg', 
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
  
    openFormular(tiername: string, breed: string, tierID: number) {
      this.router.navigate(['/kennenlernformular'], { 
        queryParams: { tiername: tiername, breed: breed, tierID: tierID } 
      });

  }
  formatDate(dateStr: string): string {
    let date = new Date(dateStr);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
  logAnimal(animal: any) {
    console.log(animal);
  }
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
}


