import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TimeInterceptor } from './time-interceptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TimeInterceptor,
    multi: true
  }
];
