import { html } from '//unpkg.com/lit-html@2.2.3?module';
import * as movieService from '../services/movieService.js';

//We can destructure here directly, and not using movie.im, movie. or whatever
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
    
    <section class="movies-wrapper">
        <ul class="movie-list">
            ${movies.map(m => movieCardTemplate(m))}
        </ul>
    
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>    
    </section>
`;

export function moviesAllPage(ctx) {
    let moviesPromise = null;

    console.log(ctx.qs);
    if (ctx.qs.search) {
        moviesPromise = movieService.search(ctx.qs.search);
    } else if (ctx.qs.page) {

    } else {
        moviesPromise = movieService.getAll();
    }

    moviesPromise
        .then(movies => ctx.renderProp(moviesAllTemplate(movies))); // here in the then the promise is resolved
}

export function myMoviesPage(ctx) {
    movieService.getMyMovies(ctx.userId)
        .then(movies => {
            // console.log(movies);
            ctx.renderProp(moviesAllTemplate(movies)); // here in the then the promise is resolved
        });
}