import * as authService from '../services/authService.js';

export function authMiddleware(ctx, next) {
    let userData = authService.getUsrData();

    if (userData.accessToken) {
        ctx.userId = userData._id;
        ctx.isAuthenticated = true;
        ctx.email = userData.email;
        ctx.token = userData.accessToken;
    } 
    // the context is re-written every time - so no need the else
    /*else {
        ctx.isAuthenticated = false;
        ctx.email = null;
        ctx.token = null;
    }*/

    next();
}