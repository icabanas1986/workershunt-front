import { Component, Input, OnInit, Output } from '@angular/core';
import { throws } from 'assert';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }
  @Input()
  maximoRating = 5;
  @Input()
  ratingSeleccionado = 0;
  @Output()
  rated:EventEmitter<number> = new EventEmitter<number>();
  maximoRatingArr:number[] = [];
  votado=false;
  ratingAnterior:any;

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }
  manejaMouseEnter(index:number):void{
    this.ratingSeleccionado = index +1;
  }
  manejaMouseLeave():void{
    if(this.ratingAnterior!==0)
    {
      this.ratingSeleccionado = this.ratingAnterior;
    }else
    {
      this.ratingSeleccionado = 0;
    }
  }
  rate(index:number):void{
    this.ratingSeleccionado = index+1;
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }
}
