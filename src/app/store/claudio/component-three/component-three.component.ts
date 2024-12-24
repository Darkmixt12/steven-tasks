import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { componentThree } from '../claudio-action/claudio-action.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar/navbar.component';
import { selectBooks } from '../claudio-selector/claudio-selector.component';

@Component({
  selector: 'app-component-three',
  imports: [CommonModule],
  templateUrl: './component-three.component.html',
  styleUrl: './component-three.component.css'
})
export default class ComponentThreeComponent {
  private readonly store = inject(Store)
  readonly book = this.store.selectSignal(selectBooks);

   private status2 = inject(Store<{state: string}>)
      componentThree(){
        this.status2.dispatch( componentThree() )
      }
}
