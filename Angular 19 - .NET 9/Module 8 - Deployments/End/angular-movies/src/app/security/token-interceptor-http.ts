import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { SecurityService } from "./security.service";

export const tokenInterceptorHTTP: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
    const securityService = inject(SecurityService);
    const token = securityService.getJWTToken();

    if (token){
        req = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    return next(req);
}