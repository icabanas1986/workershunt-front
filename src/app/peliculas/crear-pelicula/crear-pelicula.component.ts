import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  constructor(private router:Router,private formbuilder:FormBuilder) { }
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      nombre:['',{
        validators:[Validators.required,Validators.minLength(3)]
      }]
  });
  }
  guardarCambios(){
    //..guardar cambios
    this.router.navigate(['/generos'])
  }

  obtenerErrorCampoNombre()
  {
    var campo = this.form.get('nombre');
    if(campo?.hasError('required'))
    {
        return 'El campo nombre es requerido';
    }
    if(campo?.hasError('minlength'))
    {
       return 'La longitud minima es de 3 caracteres.'
    }
    return '';
  }
}
