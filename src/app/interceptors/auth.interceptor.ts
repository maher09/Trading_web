import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  // استخدام inject للحصول على AuthService
  const auth = inject(AuthService);

  // الحصول على التوكن وإضافته إلى الطلب
  return from(auth.getAccessTokenSilently()).pipe(
    switchMap(token => {
      if (token) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      return next(req);
    })
  );
};
