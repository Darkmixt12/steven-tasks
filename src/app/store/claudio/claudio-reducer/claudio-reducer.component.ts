import { createReducer, on } from "@ngrx/store"
import { componentOne, componentThree, componentTwo } from "../claudio-action/claudio-action.component"



export const initialState = 'Status'

export const stateChange = createReducer(
  initialState,
  on(componentOne, (state) => state = 'Status componente 1'),
  on(componentTwo, (state) => state = 'Status componente 2' ),
  on(componentThree, (state) => state = 'Status componente 3')
  
)