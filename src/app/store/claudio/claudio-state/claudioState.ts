import { ActionReducerMap } from "@ngrx/store";
import { stateChange, StateInterface } from "../claudio-reducer/claudio-reducer.component";


export interface AppState {
	status: StateInterface
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
	status: stateChange
}