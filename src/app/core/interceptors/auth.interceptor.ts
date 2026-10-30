import {
  HttpInterceptorFn
} from '@angular/common/http';

import {
  inject
} from '@angular/core';

import {
  StorageService
} from '../services/storage.service';

export const authInterceptor: HttpInterceptorFn =
  (req, next) => {

    const storageService =
      inject(StorageService);

    const token =
      storageService.getToken();

    if (!token) {
      return next(req);
    }

    const clonedRequest =
      req.clone({
        setHeaders: {
          Authorization:
            `Bearer ${token}`
        }
      });

    return next(clonedRequest);
  };
