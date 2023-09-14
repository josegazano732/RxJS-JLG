import { Component, OnInit } from '@angular/core';

import { Alumno } from 'src/app/Model/alumno';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {

    alumno1:Alumno= new Alumno (1,'Jose Luis','Gazano','Apostoles');

  constructor() { }

  ngOnInit(): void {
  }

  

}
