import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})
export class registrierungComponent implements OnInit {
  meinFormular!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.erstelleFormular();
  }

  erstelleFormular() {

    function equalToValidator(control: AbstractControl): { [key: string]: any } | null {
      const passwort = control.value;
      const passwortWiederholen = control.root.get('Passwort wiederholen')?.value;
    
      if (passwort !== passwortWiederholen) {
        return { equalTo: true };
      }
    
      return null;
    }

    this.meinFormular.get('Vorname')?.setValidators([Validators.minLength(2), Validators.pattern(/^[A-Za-z]+$/)]);
    this.meinFormular.get('Nachname')?.setValidators([Validators.minLength(2), Validators.pattern(/^[A-Za-z]+$/)]);
    this.meinFormular.get('Benutzername')?.setValidators(Validators.minLength(5));
    const currentDate = new Date();
    const minDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
    const telefonnummerValidator = Validators.pattern(/^\+?\d{1,3}[\s-]?\d{1,3}[\s-]?\d{1,4}[\s-]?\d{1,4}$/);
    this.meinFormular.get('Telefonnummer')?.setValidators([Validators.required,telefonnummerValidator]);
    this.meinFormular.get('Email')?.setValidators([Validators.required, Validators.email]);
    const minLengthValidator = Validators.minLength(8);
    const complexityValidator = Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/);
    this.meinFormular.get('Passwort')?.setValidators([Validators.required,minLengthValidator, complexityValidator]);
    const passwort = this.meinFormular.get('Passwort');
    this.meinFormular.get('Passwort wiederholen')?.setValidators([Validators.required, equalToValidator]);
    const straßenValidator = Validators.pattern(/^[\p{L}\säöüÄÖÜß\/.-]+$/u);
    this.meinFormular.get('Straße')?.setValidators([Validators.required, straßenValidator]);
    const nummerValidator = Validators.pattern(/^[0-9]+$/);
    this.meinFormular.get('Hausnummer')?.setValidators([Validators.required, nummerValidator]);
    const plzValidator = Validators.pattern(/^\d{5}$/);
    this.meinFormular.get('PLZ')?.setValidators([ Validators.required, plzValidator]);
    const stadtnamenValidator = Validators.pattern(/^[\p{L}\s-]+$/u);
    this.meinFormular.get('Stadt')?.setValidators([ Validators.required, stadtnamenValidator]);

    this.meinFormular = this.formBuilder.group({
      Vorname: ['', Validators.required],
      Nachname: ['', Validators.required],
      Benutzername: ['', Validators.required],
      Geburtstag: ['', Validators.min(minDate.getTime())],
      Telefonnummer: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Passwort: ['', Validators.required],
      'Passwort wiederholen': ['', Validators.required],
      Straße: ['', Validators.required],
      Hausnummer: ['', Validators.required],
      PLZ: ['', Validators.required],
      Stadt: ['', Validators.required]
    });

  }
  

  submitForm() {
    if (this.meinFormular.valid) {
      const url = '/kunde';
      const formData = { ...this.meinFormular.value };
      formData.Geburtstag = this.datePipe.transform(formData.Geburtstag, 'yyyy-MM-dd');
  
      this.http.post(url, formData).subscribe(
        (response: any) => {
          // Erfolgreiche Antwort verarbeiten
          console.log(response);
        },
        (error: any) => {
          // Fehlerbehandlung
          console.error(error);
        }
      );
    } else {
      // Zeige eine Fehlermeldung oder handle die Invalidität auf andere Weise
      console.log('Formular ist ungültig');
    }
  }
}
