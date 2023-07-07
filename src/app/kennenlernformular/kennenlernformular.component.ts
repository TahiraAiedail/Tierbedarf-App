import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-kennenlernformular',
  templateUrl: './kennenlernformular.component.html',
  styleUrls: ['./kennenlernformular.component.css']

})
export class KennenlernformularComponent implements OnInit {

  public tiername!: string;
  public breed!: string;
  public tierID!: number;
  public MitarbeiterID!: number;
  public minDate: Date;
  public maxDate: Date;
  public userForm: FormGroup;
 // date!: FormControl;
  date!: Date;
  public datepipe: DatePipe;

  constructor(private route: ActivatedRoute, private http: HttpClient, public authService: AuthService, private fb:FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);
   // this.date = new FormControl('', [this.weekdayValidator]);
      this.datepipe = new DatePipe("en-US");
      this.userForm=this.fb.group({date:""})
   }

  ngOnInit(): void {
    console.log('ngOnInit aufgerufen');
    this.route.queryParams.subscribe(params => {
      this.tiername = params['tiername'];
      this.breed = params['breed'];
      this.tierID = Number(params['tierID']);
      console.log('Empfangene tierID:', this.tierID); // Hinzufügen dieser Zeile
      this.getEmployeeWithLeastAppointments();
        });
      }
  
      weekdayValidator = (control: AbstractControl): ValidationErrors | null => {
        const date = control.value;
        const day = date.getDay();
      
        // Reject the date if it's a Saturday or Sunday
        if (day === 0 || day === 6) {
          return { weekend: true };
        }
      
        return null;
      }
      

  onSubmit(formData: any): void {
 console.log(formData);

 // Zugriff auf  Eigenschaften des Tieres
 console.log(this.tiername);
 console.log(this.breed);
 console.log(this.tierID);
 this.date=this.userForm.get("termin")?.value;
 console.log(this.date);
 // Daten für Datenbankabfrage zusammenstellen
 const data = {
   Datum: this.date,
   KundenID: this.authService.kundenID, //ToDO: geteingeloggterNutzer
   TierID: this.tierID,
   MitarbeiterID: this.MitarbeiterID //ToDO: Mitarbeiter automatisch setzen
 };
  var day = this.date.getDate;
 if(day == 0 || day == 6) {
   console.log("wrong day!");
 }else {
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
