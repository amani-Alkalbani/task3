import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: CommonService, private router: Router,private tostr:ToastrService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    if (sessionStorage.getItem('Admin')=='Admin') {
      return true;
    }
    return this.router.parseUrl('/login');
  }



  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
  //   if (this.service.isloggedin()) {
  //     if (route.url.length > 0) {
  //       let menu = route.url[0].path;
  //       if (menu == 'User') {
  //         if (sessionStorage.getItem('role') == 'Admin') {
  //           this.router.navigate(['list']);
  //           return true;
          
  //         } else {
           
  //             this.tostr.warning('You dont have access.')
  //             this.router.navigate(['login']);
  //           return false;
  //         }
  //       }else{
  //         return true;
  //       }
  //     } else {
  //       return true;
  //     }
  //   }
  //   else {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  // }

}
