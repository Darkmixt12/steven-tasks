import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/marcador/marcador-reducer/marcador-reducer.component';
import { stateChange } from './store/claudio/claudio-reducer/claudio-reducer.component';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ count: counterReducer, state: stateChange }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};
