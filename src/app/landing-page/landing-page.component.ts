import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  peliculasEnCines:any;
  peliculasProximosEstrenos:any;
  ngOnInit(): void {
      this.peliculasEnCines = [{
        titulo:'Lord of the rings',
        fecha:new Date(),
        monto:'$2300.79',
        poster:'https://sportshub.cbsistatic.com/i/2022/10/01/c3092031-fa95-4976-aa7a-da121be919c2/the-lord-of-the-rings-the-rings-of-power.jpg'
      },
      {
        titulo:'Star Wars',
        fecha:new Date(),
        monto:'$3000.79',
        poster:'https://m.media-amazon.com/images/I/A1wnJQFI82L._AC_SY879_.jpg'
      }]
    this.peliculasEnCines;
    this.peliculasProximosEstrenos = []; 
  }

}
