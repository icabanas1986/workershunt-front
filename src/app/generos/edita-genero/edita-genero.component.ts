import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-edita-genero',
  templateUrl: './edita-genero.component.html',
  styleUrls: ['./edita-genero.component.css']
})
export class EditaGeneroComponent {

  constructor(private router:Router) { }

  modelo:generoCreacionDTO = {nombre:'Drama'};

  guardarCambios(genero:generoCreacionDTO){
    //..guardar cambios
    console.log(genero);
    this.router.navigate(['/generos'])
  }
}
