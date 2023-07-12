import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rechnungkunde',
  templateUrl: './rechnungkunde.component.html',
  styleUrls: ['./rechnungkunde.component.css']
})


export class RechnungkundeComponent implements OnInit {
  rechnungsdetails: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    const rechnungsnummer = this.route.snapshot.paramMap.get('rechnungsnummer');

    this.http.get<any[]>(`/rechnungkundedetails/${rechnungsnummer}`)
      .subscribe(
        data => {
          this.rechnungsdetails = data;
        },
        error => {
          console.error('Fehler beim Laden der Rechnungsdetails:', error);
        }
      );
  }

  goBack() {
    this.router.navigate(['/rechnungsuebersicht']);
  }
}
