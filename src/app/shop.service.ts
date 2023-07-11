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
    // Datum in das richtige Format umwandeln (optional)
    const formattedDatum = bestellung.datum.toISOString().slice(0, 10);

    // Bestellung an den Server senden
    return this.http.post('/api/bestellung', { ...bestellung, datum: formattedDatum });
  }

}
