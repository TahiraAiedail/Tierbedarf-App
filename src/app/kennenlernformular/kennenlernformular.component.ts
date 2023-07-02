import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-kennenlernformular',
  templateUrl: './kennenlernformular.component.html',
  styleUrls: ['./kennenlernformular.component.css']
})
export class KennenlernformularComponent implements OnInit {

  public name!: string;
  public breed!: string;
  public tierID!: number;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.breed = params['breed'];
      this.tierID = Number(params['tierID']);
    });
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
   MitarbeiterID: formData.employeeID //ToDO: Mitarbeiter automatisch setzen
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
}
