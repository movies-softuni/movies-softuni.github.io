// import { html } from '../../../node_modules/lit-html/lit-html.js';
import { html } from '//unpkg.com/lit-html?module';

// import {ifDefined} from '../../../node_modules/lit-html/directives/if-defined.js';
import {ifDefined} from '//unpkg.com/lit-html/directives/if-defined.js?module';

export const addEditMovieTemplate = (onSubmit, movie = {}) => html`
<h3>${movie.title ? "Edit Movie" : "Add Movie"}</h3>

<form @submit=${onSubmit}>
    <div class="mb-3">
        <label for="movie-title" class="form-label">Movie Title</label>
        <input type="text" class="form-control" name="title" id="movie-title" .value=${movie.title ? movie.title : ''}> <!-- with pure JS -->
    </div>

    <div class="mb-3">
        <label for="movie-image-url" class="form-label">Image URL</label>
        <input type="text" class="form-control" name="imageUrl" id="movie-image-url" .value=${ifDefined(movie.img)}> <!-- with if-defined directive -->
    </div>

    <div class="mb-3">
        <label for="movie-description" class="form-label">Description</label>
        <textarea class="form-control" id="movie-description" name="description" rows="3" .value=${movie?.description || ''}></textarea> <!--Optional chaining - пробвай се да достъпиш property description, ако го няма, то върни undefined -->
    </div>

    <div class="mb-3">
        <input class="form-control" type="submit" value=${movie.title ? "Update" : "Create"}/>
    </div>
</form>`;


