import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { componentOne } from '../claudio-action/claudio-action.component';
import { CommonModule } from '@angular/common';
import ComponentTwoComponent from '../component-two/component-two.component';
import ComponentThreeComponent from '../component-three/component-three.component';
import { selectBooks } from '../claudio-selector/claudio-selector.component';

@Component({
  selector: 'app-component-one',
  imports: [CommonModule, ComponentTwoComponent, ComponentThreeComponent],
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.css'
})
export default class ComponentOneComponent {

  private readonly store = inject(Store)
  readonly users = this.store.selectSignal(selectBooks);
  // constructor(private status: Store<{ state: string}>) {
  //     this.status$ = status.select('state')
  //   }

   private status2 = inject(Store<{state: string}>)


  componentOne(){

    this.status2.next( componentOne() )
  }


}
