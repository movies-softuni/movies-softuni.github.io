import { html } from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../services/movieService.js';

//we can destructure here directly, and not using movie.im, movie. еди какво си на магия
const movieCardTemplate = ({  
    _id,
    img,
    title
}) => html`
<li class="movieListItem" style="width: 18rem;">
    <img src=${img} class="card-img-top" alt=${title}>
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <a href="/movies/${_id}" class="btn btn-primary">Details</a>
    </div>
</li>`;

const moviesAllTemplate = (movies) => html`
    <h3>Movie Page</h3>
        
    <ul class="movie-list">
        ${movies.map(m => movieCardTemplate(m))}
    </ul>
`;

export function moviesAllPage(ctx) {
    movieService.getAll()
        .then(movies => ctx.renderProp(moviesAllTemplate(movies))); // here in the then the promise is resolved
}

export function myMoviesPage(ctx) {
    movieService.getMyMovies(ctx.userId)
        .then(movies => {
            // console.log(movies);
            ctx.renderProp(moviesAllTemplate(movies)); // here in the then the promise is resolved
        });    
}