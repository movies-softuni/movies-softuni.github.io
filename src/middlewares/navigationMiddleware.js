import {render} from '../../node_modules/lit-html/lit-html.js';
import { renderNavigator } from '../views/navigationView.js';

const navigationElement = document.querySelector('.navigation');

export function navigationMiddleware(ctx, next) {
    render(renderNavigator(ctx), navigationElement);  //We render the navigation with access to the ctx context 
       
    next();
}