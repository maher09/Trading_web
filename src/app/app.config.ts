import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideAuth0({
      domain: 'dev-g4mcgm4pyyex3a1r.us.auth0.com',
      clientId: 'qdFoW5tXqTbviNKLDXPr8rOuumDfK0OA',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),

  ]
};
