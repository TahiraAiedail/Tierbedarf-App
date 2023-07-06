import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})

export class registrierungComponent implements OnInit  {
  formData={
    Benutzername:'', 
    Nachname:'',
    Vorname:'', 
    Geburtsdatum:'', 
    Telefonnummer:'', 
    EMail:'', 
    Passwort:'', 
    Straße:'', 
    Hausnummer:'', 
    Stadt:'', 
    PLZ:''
  }
  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ){}
  ngOnInit(): void {}
  submitForm() {
    const url = '/kunde';
    this.http.post(url, this.formData).subscribe(
      (response: any) => {
        // Erfolgreiche Antwort verarbeiten
        console.log(response);
      },
      (error: any) => {
        // Fehlerbehandlung
        console.error(error);
      }
    );
  
  }
}