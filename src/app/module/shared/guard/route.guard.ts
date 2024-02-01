import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../../service/auth/Auth.service";

export const routeGuard: CanActivateFn = (route, state) => {
  const  authService= inject(AuthService)
  const routerService=inject(Router)

  if(authService.checkCookies('myToken')){
    return  true
  }else {
    routerService.navigateByUrl('/security/login');
    return  false
  }
};
