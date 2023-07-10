import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ersatzfuerreg',
  templateUrl: './ersatzfuerreg.component.html',
  styleUrls: ['./ersatzfuerreg.component.css']
})
export class ErsatzfuerregComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  pattern = {
    name: /^[A-Za-z]+$/,
    telefonnummerr: /^\d{1,8}$/,
    passwort: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    strasse: /^[\p{L}\säöüÄÖÜß\/.-]+$/u,
    nummer: /^[0-9]+$/,
    plz: /^\d{5}$/,
    stadt: /^[\p{L}\s-]+$/u
  };

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Benutzername: ['', [Validators.required, Validators.pattern(this.pattern.name)]],
      Nachname: ['', [Validators.required, Validators.pattern(this.pattern.name)]],
      Vorname: ['', [Validators.required, Validators.pattern(this.pattern.name)]],
      Geburtsdatum: ['', Validators.required],
      Telefonnummer: ['', [Validators.required, Validators.pattern(this.pattern.telefonnummerr)]],
      EMail: ['', [Validators.required, Validators.email]],
      Passwort: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.pattern.passwort)]],
      Straße: ['', [Validators.required, Validators.pattern(this.pattern.strasse)]],
      Hausnummer: ['', [Validators.required, Validators.pattern(this.pattern.nummer)]],
      Stadt: ['', [Validators.required, Validators.pattern(this.pattern.stadt)]],
      PLZ: ['', [Validators.required, Validators.pattern(this.pattern.plz)]]
    });
    this.checkBenutzernameAvailability();
    this.setupLiveValidation();
  }
  checkBenutzernameAvailability() {
    const benutzernameControl = this.registerForm.get('Benutzername');
  
    if (benutzernameControl) {
      benutzernameControl.valueChanges.subscribe((benutzername: string) => {
        if (benutzername) {
          this.http.post('/benutzername', { Benutzername: benutzername }).subscribe(
            (response: any) => {
              if (!response.available) {
                benutzernameControl.setErrors({ benutzernameExists: true });
              } else {
                benutzernameControl.setErrors(null);
              }
            },
            (error) => {
              console.error('Fehler bei der Überprüfung des Benutzernamens:', error);
            }
          );
        }
      });
    }
  }
  
  setupLiveValidation() {
    const formControls = this.registerForm.controls;
  
    Object.keys(formControls).forEach((controlName) => {
      const control = formControls[controlName];
  
      if (control) {
        control.valueChanges.subscribe(() => {
          if (control.invalid && (control.dirty || control.touched)) {
            control.markAsTouched(); // Markiere das Feld als berührt, um die Fehleranzeige auszulösen
          }
        });
      }
    });
  }
  
    
  onSubmit() {
    if (this.registerForm.valid) {
      const data = {
        Benutzername: this.registerForm.value.Benutzername,
        Nachname: this.registerForm.value.Nachname,
        Vorname: this.registerForm.value.Vorname,
        Geburtsdatum: this.registerForm.value.Geburtsdatum,
        Telefonnummer: this.registerForm.value.Telefonnummer,
        EMail: this.registerForm.value.EMail,
        Passwort: this.registerForm.value.Passwort,
        Straße: this.registerForm.value.Straße,
        Hausnummer: this.registerForm.value.Hausnummer,
        Stadt: this.registerForm.value.Stadt,
        PLZ: this.registerForm.value.PLZ
      };
      this.http.post('/kunde', data).subscribe(
        response => {
          console.log('Registrierung erfolgreich! Antwort: ', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Es gab ein Problem bei der Registrierung: ', error);
        }
      );
    }
  }
}
