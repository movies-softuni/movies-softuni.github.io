// import {render} from '../../node_modules/lit-html/lit-html.js';
import {render} from '//unpkg.com/lit-html?module';
import { renderNavigator } from '../views/navigationView.js';

const rootElement = document.querySelector('.root');

//quicker with less reloadings
const contxRend = templateResult => {    
    render(templateResult, rootElement); 
}; 

export function renderMiddleware(ctx, next) {
      ctx.renderProp = contxRend;

    next();
}