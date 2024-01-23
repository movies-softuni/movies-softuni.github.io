import {render} from '//unpkg.com/lit-html@2.2.3?module';
import { renderNavigator } from '../views/navigationView.js';

const navigationElement = document.querySelector('.navigation');

export function navigationMiddleware(ctx, next) {
    render(renderNavigator(ctx), navigationElement);  //We render the navigation with access to the ctx context 
       
    next();
}