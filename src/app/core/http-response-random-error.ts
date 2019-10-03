import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { DeviceDetectorService } from "ngx-device-detector";

@Injectable()
export class HttpResponseRandomError implements HttpInterceptor {
  constructor(
    private deviceService: DeviceDetectorService,
    private http: HttpClient
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const random = Math.floor(Math.random() * 100) + 1;

    if (random < 15) {
      let errorMessage = `Error Code: 400\nMessage: error simulado`;
      return throwError(errorMessage);

    }
    return next.handle(req);
  }
}
