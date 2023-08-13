import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

   valores: number[]=[18,25,34,44,55,68,72,83,91,102];

   nuevoValores: number[]=[];

  constructor() { }

  ngOnInit(): void {
    this.filtrar();

  }


  
  filtrar(){


    this.nuevoValores= this.valores.filter( (valores:number, index:number, array:number[])=>{
      if (valores<50) {
        console.log('Es True');
        ;
      }

    //console.log('Los valores ', valores, 'index', index);
    //console.log('Array es: ', array);
    
    
    
    
      
  } )
  }


}
