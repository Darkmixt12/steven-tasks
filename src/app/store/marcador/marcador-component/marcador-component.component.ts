import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../marcador-action/marcador-action.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marcador-component',
  imports: [CommonModule],
  templateUrl: './marcador-component.component.html',
})
export default class MarcadorComponentComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number}>) {
    this.count$ = store.select('count')
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
