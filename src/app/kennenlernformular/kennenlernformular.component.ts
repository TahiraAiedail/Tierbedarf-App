import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-kennenlernformular',
  templateUrl: './kennenlernformular.component.html',
  styleUrls: ['./kennenlernformular.component.css']
})
export class KennenlernformularComponent implements OnInit {

  public name!: string;
  public breed!: string;
  public tierID!: number;
  public MitarbeiterID!: number;
  public minDate: Date;
  public maxDate: Date;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);
   }

  ngOnInit(): void {
    console.log('ngOnInit aufgerufen');
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.breed = params['breed'];
      this.tierID = Number(params['tierID']);
      console.log('Empfangene tierID:', this.tierID); // Hinzufügen dieser Zeile
      this.getEmployeeWithLeastAppointments();
        });
      }
  
  dateFilter = (date: Date | null): boolean => {
    const day = (date || new Date()).getDay();
    return day !== 0 && day !== 6;
}

  onSubmit(formData: any): void {
 console.log(formData);

 // Zugriff auf  Eigenschaften des Tieres
 console.log(this.name);
 console.log(this.breed);
 console.log(this.tierID);

 // Daten für Datenbankabfrage zusammenstellen
 const data = {
   Datum: formData.date, 
   KundenID: formData.customerID, //ToDO: geteingeloggterNutzer
   TierID: this.tierID,
   MitarbeiterID: this.MitarbeiterID //ToDO: Mitarbeiter automatisch setzen
 };

 this.http.post('/kennenlerntermin', data).subscribe(
   (response: any) => {
     console.log('Formular erfolgreich übermittelt:', response);
   },
   (error: any) => {
     console.error('Fehler beim Übermitteln des Formulars:', error);
   }
 );
  }

  getEmployeeWithLeastAppointments() {
    this.http.get('/mitarbeitermitwenigstenkennenlernterminen').subscribe(
      (response: any) => {
        this.MitarbeiterID = response.MitarbeiterID; // Setzen Sie die MitarbeiterID auf die ID des Mitarbeiters mit den wenigsten Kennenlernterminen
      },
      (error: any) => {
        console.error('Fehler beim Abrufen des Mitarbeiters mit den wenigsten Kennenlernterminen:', error);
      }
    );
   
    }
}
