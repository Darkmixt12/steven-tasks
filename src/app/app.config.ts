import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/marcador/marcador-reducer/marcador-reducer.component';
import { stateChange } from './store/claudio/claudio-reducer/claudio-reducer.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ count: counterReducer, state: stateChange }),
  ],
};
