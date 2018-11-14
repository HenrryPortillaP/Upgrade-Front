import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Alumno } from './alumno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data:DataService) { }
  prueba : any = "hola";
  ngOnInit() {
  }

  firstClick():void{
    this.data.getalumnos().subscribe(
      (data : Alumno) => {
        this.prueba = data[0].nombre;
        console.log(data)
      },
      (error : any) => {console.log(error);}
    );
  }

}
