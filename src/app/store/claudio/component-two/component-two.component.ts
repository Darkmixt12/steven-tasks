import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { componentTwo } from '../claudio-action/claudio-action.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-two',
  imports: [CommonModule],
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.css'
})
export default class ComponentTwoComponent {
  status$: Observable<string>;

  constructor(private status: Store<{ state: string}>) {
      this.status$ = status.select('state')
    }


  componentOne(){
    this.status.next( componentTwo() )
  }
}
