import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private service: CommonService, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('token');
    const userid = localStorage.getItem('user_id');

    if (authToken && userid) {
      req = req.clone({
        headers: req.headers.set('Authorization', authToken).set('UserId', userid)
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log("error",error)
        if (error.status === 401) {
          this.service.notification('Unauthorized','Unauthorized access, Please log in again','fail');
          this.router.navigate(['kmr/login']);
        } else {
          console.error('HTTP error:', error);
        }
        return throwError(error);
      })
    );
  }
}
