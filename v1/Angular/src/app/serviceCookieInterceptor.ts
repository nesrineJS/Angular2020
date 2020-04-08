import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
// pourquoi ce service?
// j'ai remarqué que le cookie change à chaque requete ce qui a engendré un probleme 
//donc ce  service est utile pour intercepter chaque requete 
//et mettre le  meme cookie dans tous les requete et enlever l'esprit de session pour les requetes , l'esprit de session ce pour le users  ctt
@Injectable()
export class AddCookieInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`AddCookieInterceptor intercepted ${req.url} with method ${req.method}`);

    const reqWithCookie: HttpRequest<any> = req.clone({
      withCredentials: true
    });

    return next.handle(reqWithCookie);
  }
}