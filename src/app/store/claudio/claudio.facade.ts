import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { componentOne, componentThree, componentTwo } from "./claudio-action/claudio-action.component";


@Injectable({providedIn: 'root'})
export class ChangeStateFacade {
	#store:Store = inject(Store)

	componentOne(){
		this.#store.dispatch(componentOne())
	}

	componentTwo(){
		this.#store.dispatch(componentTwo())
	}

	componentThree(){
		this.#store.dispatch(componentThree())
	}
	
}