import { html } from '//unpkg.com/lit-html@2.2.3?module';
import * as movieService from '../services/movieService.js';

const privateButtons = (_id) => html`
<div>
    <a class="btn btn-success" href="/movies/${_id}/edit">Edit</a>
    <a class="btn btn-danger" href="/movies/${_id}/delete">Delete</a>
</div>`;

const publicButtons = (_id) => html`
<div>
    <button class="btn btn-success">Up</button>
    <button class="btn btn-danger">Down</button>
</div>`;

const movieDetailsTemplate = ({  //we can destructure here directly, and not using movie.im, movie. or whatever
    isOwn,
    _id,  //from movieData
    img,
    title,
    description
}) => html`
<div class="movie-details" style="width: 18rem;">
    <img src=${img} class="card-img-top" alt=${title}>
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
    </div>

    <div>
        ${isOwn 
            ? privateButtons(_id)
            : publicButtons(_id)}
    </div>
</div>`;


export function movieDetailsPage(ctx) {
    movieService.getOneMovie(ctx.params.movieId)
        .then(movieData => {
            let templateData = {
                userId: ctx.userId,
                isOwn: movieData._ownerId == ctx.userId,
                ...movieData   //Object.assign({}, , );
            };
            ctx.renderProp(movieDetailsTemplate(templateData)); // here in the then the promise is resolved
        })

}