import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Ist für Anfragen wie GET / PUT / POST zuständig


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  myTest:any;
  constructor(private http: HttpClient) {
    
    console.log("test");
    this.getSth();
  };


  url="test"
  getSth():void {
    this.http.get(this.url).subscribe((data) => {
      console.log(data);
      this.myTest = data;
    });
  }

  
  tierheimtiereDaten: any;
  tierheimtiereUrl = 'tiere'
  getTierheimtiere(): void {
    console.log("Test2");
    this.http.get(this.tierheimtiereUrl).subscribe((data) => {  //subscribe() beginnt den HTTP request
      console.log("Test3");
      this.tierheimtiereDaten = data;
      console.log("In home:" + this.tierheimtiereDaten);
    });
  }
}
