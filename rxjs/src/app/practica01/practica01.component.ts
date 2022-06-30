import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-practica01',
  templateUrl: './practica01.component.html',

})
export class Practica01Component implements OnInit {
  obs: any;

  constructor() { }

  ngOnInit(): void {
    this.obs = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
  }

  rxjsFun() {
    console.log('just before subscribe');
    this.obs.subscribe({
      next(x: any) { console.log('got value ' + x); },
      error(err: any) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');
  }

}
