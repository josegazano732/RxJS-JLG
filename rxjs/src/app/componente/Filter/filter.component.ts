import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  valores: number[]=[18,25,34,44,55,68,72,83,91,102];
  frutas:string[]=['Manzanita','Pera','Banana','sandia','Durazno'];

  numeroValor:number | undefined;

   nuevoValores: number[]=[];

   nuevaFrutas: string[]=[];
value: any;
name: any;

  constructor() { }

  ngOnInit(): void {
    //this.filtrarNum(75);
    this.filtrarNum(25);
    
    
  }


  
  filtrarNum(valor:number){
    this.valores.filter( (valores:number, _index:number, _array:number[])=>{
      if (valores<=valor) {
        //console.log('Es True',valores, 'Indice: ', index);
        this.nuevoValores.push(valores);
        console.log(this.nuevoValores);
      }   
  });
  }

  filtrarfrutas(){
    this.frutas.filter((valorActual:string,indice:number,array:string[]) => {
      if (valorActual.length <= 2) {
        
        console.log(valorActual);
        
      }
    })
  }






}
