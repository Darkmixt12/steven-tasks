import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { componentThree } from '../claudio-action/claudio-action.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar/navbar.component';

@Component({
  selector: 'app-component-three',
  imports: [CommonModule],
  templateUrl: './component-three.component.html',
  styleUrl: './component-three.component.css'
})
export default class ComponentThreeComponent {
  status$: Observable<string>;

  constructor(private status: Store<{ state: string}>) {
      this.status$ = status.select('state')
    }

      componentThree(){
        this.status.dispatch( componentThree() )
      }
}
