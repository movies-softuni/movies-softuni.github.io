import { html } from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../services/movieService.js';

const deleteMovieTemplate = (movie, onClick) => html`
<div class="alert alert-danger" role="alert">
    Are you sure you want to delete movie ${movie.title}
</div>

<div>
    <button class="btn btn-danger" @click=${onClick}>Yes, delete</button>
    <a class="btn btn-info" href="/movies/${movie._id}">Cancel</a>
</div>`;

export function deleteMoviePage(ctx) {
    const onMovieDelete = () => {
        movieService.deleteMovie(ctx.params.movieId)
        .then(response => {
            ctx.page.redirect("/movies");
        })
    };

    movieService.getOneMovie(ctx.params.movieId)
        .then(movie => {
            ctx.renderProp(deleteMovieTemplate(movie, onMovieDelete));
        });

    
}