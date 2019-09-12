import {Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class TimeInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const start = performance.now();

    return next.handle(req).pipe(
      filter(event => event.type === HttpEventType.Response),
      // если не предполагается менять поток, то можно tap()
      map((event: HttpResponse<any>) => {
        console.log(req.url + ' time: ' + (performance.now() - start) + 'ms');
        return event;
      })
    );
  }
}

