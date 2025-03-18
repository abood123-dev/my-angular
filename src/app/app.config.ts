import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes, withComponentInputBinding()), 
     { provide: LocationStrategy, useClass: PathLocationStrategy },
     provideHttpClient(),
     provideClientHydration(withEventReplay())]
};
