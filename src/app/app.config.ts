import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import vaultPreset from '@app/vault-preset';
import license from '@env/license';
import { es } from 'primelocale/es.json';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withViewTransitions(),
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
    ),
    providePrimeNG({
      translation: es,
      ripple: true,
      theme: {
        preset: vaultPreset,
        options: {
          darkModeSelector: '.vault-app-dark',
        },
      },
      license: license,
    }),
  ],
};
