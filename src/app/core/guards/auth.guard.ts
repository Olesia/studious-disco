import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanActivate Guard is called');
    const { url } = state;
    return this.checkLogin(url);

  }

  canActivateChild(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
          Observable<boolean | UrlTree> | Promise< boolean | UrlTree> | boolean | UrlTree {
    console.log('CanActivateChild Guard is called');
    const { url } = state;
    return this.checkLogin(url);
}

  private checkLogin(url: string): boolean | UrlTree {
    if (this.authService.isLoggedIn) { return true; }
    this.authService.redirectUrl = url;
    return this.router.parseUrl('/login');
  }
}
