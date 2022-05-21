import * as movieService from '../services/movieService.js';
import { addEditMovieTemplate } from './templates/movieFormTemplate.js';

export function addMoviePage(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        // console.log([...formData.entries()]);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        movieService.createMovie(title, imageUrl, description)
            .then(response => {
                ctx.page.redirect('/movies');
            });

    };

    ctx.renderProp(addEditMovieTemplate(onSubmit));
}