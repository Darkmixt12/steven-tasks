import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { componentOne } from '../claudio-action/claudio-action.component';
import { CommonModule } from '@angular/common';
import ComponentTwoComponent from '../component-two/component-two.component';
import ComponentThreeComponent from '../component-three/component-three.component';
import { NavbarComponent } from '../../navbar/navbar/navbar.component';

@Component({
  selector: 'app-component-one',
  imports: [CommonModule, ComponentTwoComponent, ComponentThreeComponent],
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.css'
})
export default class ComponentOneComponent {
  status$: Observable<string>;

  constructor(private status: Store<{ state: string}>) {
      this.status$ = status.select('state')
    }


  componentOne(){
    this.status.next( componentOne() )
  }
}
