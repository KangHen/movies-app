import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const rapidAPIInterceptor: HttpInterceptorFn = (req, next) => {
  const cloned = req.clone({
    headers: req.headers.append('X-Rapidapi-Key', environment.rapidAPI.key),
  });

  return next(cloned);
};
