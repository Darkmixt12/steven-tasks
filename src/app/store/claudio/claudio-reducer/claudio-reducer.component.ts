import { createReducer, on } from "@ngrx/store"
import { componentOne, componentThree, componentTwo } from "../claudio-action/claudio-action.component"

export interface StateInterface {
  initialState: string
  bookName: string|null
}

export const initialState : StateInterface = { initialState: 'Status', bookName: null}

export const stateChange = createReducer(
  initialState,
  // el state inicial entre parentesis es igual al inicial state 
  on(componentOne, (state) => state = {initialState: 'Status componente 1', bookName: 'Principito'}),
  on(componentTwo, (state) => state = {initialState: 'Status componente 2', bookName: 'Harry Potter'} ),
  on(componentThree, (state) => state = {initialState: 'Status componente 3', bookName: 'Pokemon 2000'})
  
)