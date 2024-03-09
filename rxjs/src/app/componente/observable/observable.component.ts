import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {


obs:Observable<any>=new Observable((observer) =>{
  console.log('Observable Start')
  setTimeout(()=> {observer.next('1')},1000)
  setTimeout(()=>{ observer.next('2')},2000)
  setTimeout(()=> {observer.error('error emitido')},5000)
  setTimeout(()=> {observer.next('4')},8000)
  setTimeout(()=> {observer.next('5')},10000)
  /*  Esto se hace invocando la devolución de llamada error() y pasando el
  objeto de error. Los observables se detienen después de emitir la señal de error. Por lo tanto,
  en el siguiente ejemplo, los valores 4 y 5 nunca se emiten. */
  
  
}

);

  constructor() { }

  ngOnInit(): void {
    
    this.obs.subscribe({
      next(value) {
          console.log(value, 'next');
      },
      error(err) {
          console.log('err');
      },
      complete() {
          console.log('Completed');
          
      },
    })
  }

}
