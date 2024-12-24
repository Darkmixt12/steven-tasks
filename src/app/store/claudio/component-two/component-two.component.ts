import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { componentTwo } from '../claudio-action/claudio-action.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar/navbar.component';
import { selectBooks } from '../claudio-selector/claudio-selector.component';

@Component({
  selector: 'app-component-two',
  imports: [CommonModule],
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.css'
})
export default class ComponentTwoComponent {
  status$!: Observable<string>;

  private readonly store = inject(Store)
  readonly users = this.store.selectSignal(selectBooks);

  // constructor(private status: Store<{ state: string}>) {
  //     this.status$ = status.select('state')
  //   }

   private status2 = inject(Store<{state: string}>)
  componentTwo(){
    this.status2.next( componentTwo() )
  }
}
