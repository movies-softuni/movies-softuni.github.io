import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
<section>
    <h2>Home Page</h2>

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Esse soluta sapiente facilis consectetur dolore asperiores, doloribus 
        nemo repellendus eveniet nulla cumque in corporis assumenda ab necessitatibus provident sunt. Sint, tempore?
    </p>
</section>
`;

export function homePage(ctx) {
    ctx.renderProp(homeTemplate());
}