import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UserService } from '../user.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].includes(err.status)) {
                // auto logout if 401 or 403 response returned from api
               
               // remove the logout on api error for the moment to allow easier testing
               this.userService.logout();

            }

            const error = err.error?.message || err.statusText;
            console.error(err);
            return throwError(error);
        }))
    }
}