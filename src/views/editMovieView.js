
import * as movieService from '../services/movieService.js';
import { addEditMovieTemplate } from './templates/movieFormTemplate.js';

export function editMoviePage(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        // console.log([...formData.entries()]);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        movieService.updateMovie(ctx.params.movieId, title, imageUrl, description)
            .then(response => {
                console.log(response);
                ctx.page.redirect('/movies/' + ctx.params.movieId);
            });

    };

    movieService.getOneMovie(ctx.params.movieId)
        .then(movie => {
            ctx.renderProp(addEditMovieTemplate(onSubmit, movie));
        })
}