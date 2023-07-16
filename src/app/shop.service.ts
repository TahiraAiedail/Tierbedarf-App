import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getWaren() {
    return this.http.get<any[]>('/waren');
  }

  createBestellung(bestellung: any) {
    /*const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    const formattedDate = `${year}-${month}-${day}`;
  */
    const requestBody = {
      //Datum: formattedDate,
      BestellartID: bestellung.bestellartID,
      MitarbeiterID: bestellung.mitarbeiterID,
      KundenID: bestellung.kundenID,
      Zahlungsart: bestellung.zahlungsart 
    };
  
    return this.http.post('/bestellung', requestBody);
  }
  
  

}
