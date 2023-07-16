import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { DatePipe } from '@angular/common';
import { MatDialog} from '@angular/material/dialog';
import { KennenlernbestaetigungComponent } from '../kennenlernbestaetigung/kennenlernbestaetigung.component';


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
  date!: Date;
  public datepipe: DatePipe;
  public pickerFilter: any;
  public terminAlreadyRequested: boolean = false; 


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public authService: AuthService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);
    this.datepipe = new DatePipe('en-US');
    this.userForm = this.fb.group({
      date: ['', Validators.required]
    });
    this.pickerFilter = (date: Date | null) => {
      const day = (date || new Date()).getDay();
      return day !== 0 && day !== 6;
    };
  }

  ngOnInit(): void {
    console.log('ngOnInit aufgerufen');
    this.route.queryParams.subscribe(params => {
      this.tiername = params['tiername'];
      this.breed = params['breed'];
      this.tierID = Number(params['tierID']);
      console.log('Empfangene tierID:', this.tierID);
      this.getEmployeeWithLeastAppointments();
    });
  }

  getEmployeeWithLeastAppointments() {
    this.http.get<any>("/mitarbeitermitwenigstenkennenlernterminen").subscribe(
      response => {
        this.MitarbeiterID = response.MitarbeiterID;
        console.log(this.MitarbeiterID);
      }, 
      error => {
        console.error("Fehler beim Abrufen des Mitarbeiters mit den wenigsten Kennenlernterminen:", error);
      });
  }
  
  onSubmit(): void {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      console.log(formData);

      if (this.MitarbeiterID) {
        console.log(this.tiername);
        console.log(this.breed);
        console.log(this.tierID);
        this.date = this.userForm.get('date')?.value;
        console.log(this.date);

        const data = {
          Datum: this.datepipe.transform(this.date, 'yyyy-MM-dd'),
          KundenID: this.authService.kundenID,
          TierID: this.tierID,
          MitarbeiterID: this.MitarbeiterID
        };
        if (data.KundenID !== null) {
          this.http.get<any>('/doublekennenlerntermin', { params: { KundenID: data.KundenID.toString(), TierID: data.TierID.toString() } }).subscribe(
            (response) => {
              if (response.length > 0) {
                this.terminAlreadyRequested = true;
                console.log('Eintrag verweigert: Termin bereits vorhanden.');
              } else {
                this.http.post('/kennenlerntermin', data).subscribe(
                  (response) => {
                    console.log('Daten erfolgreich gesendet:', response);
                    this.openConfirmationDialog();
                  },
                  (error) => {
                    console.error('Fehler beim Senden der Daten:', error);
                  }
                );
              }
            },
            (error) => {
              console.error('Fehler beim Überprüfen des Termins:', error);
            }
          );
        }
      }
    }
  }
   
  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(KennenlernbestaetigungComponent, {
      width: '400px' // Geben Sie hier die gewünschte Breite des Dialogs an
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog geschlossen:', result);
      // Hier können Sie weitere Aktionen ausführen, nachdem der Dialog geschlossen wurde
    });
  }
}
