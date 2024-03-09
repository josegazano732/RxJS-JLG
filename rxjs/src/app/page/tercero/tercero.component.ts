import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.component.html',
  styleUrls: ['./tercero.component.css']
})
export class TerceroComponent implements OnInit {

  titulo:string='Observables';
  constructor() { }

  ngOnInit(): void {
  }

}
