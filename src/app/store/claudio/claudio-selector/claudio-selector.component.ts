import { createSelector } from "@ngrx/store";
import { AppState } from "../claudio-state/claudioState";
import { StateInterface } from "../claudio-reducer/claudio-reducer.component";

export const selecStatus = (state: AppState) => state.status //REF AL PADRE

export const selectBooks = createSelector(
  selecStatus,
  (state: StateInterface) => state.bookName //REF AL HIJO
)