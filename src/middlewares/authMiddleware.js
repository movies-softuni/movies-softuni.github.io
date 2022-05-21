import * as authService from '../services/authService.js';

export function authMiddleware(ctx, next) {
    let userData = authService.getUsrData();

    if (userData.accessToken) {
        ctx.userId = userData._id;
        ctx.isAuthenticated = true;
        ctx.email = userData.email;
        ctx.token = userData.accessToken;
    } 
    //контекстът се презаписва всеки път - няма нужда от else
    /*else {
        ctx.isAuthenticated = false;
        ctx.email = null;
        ctx.token = null;
    }*/

    next();
}