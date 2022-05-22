import page from "//unpkg.com/page/page.mjs";

import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { homePage } from './views/homeView.js';
import { moviesAllPage, myMoviesPage } from './views/moviesView.js';
import { loginPage } from './views/loginView.js';
import { movieDetailsPage } from './views/movieDetailsView.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { addMoviePage } from './views/addMovieView.js';
import { editMoviePage } from './views/editMovieView.js';
import { deleteMoviePage } from './views/deleteMovieView.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { querystringMiddleware } from "./middlewares/queryStringMiddleware.js";


page(authMiddleware); //we attach first this middleware - it is not intended to be displayed

page(navigationMiddleware); //we attach as 2nd this middleware - display the navigation element
page(renderMiddleware); //we attach this as 3d midleware - display the root element
page(querystringMiddleware); //


//Генералните routе-ве да са по-надолу изброени, а специфичните route-ве по-нагоре изброени
page('/', homePage);
page('/login', loginPage);
page('/movies', moviesAllPage);
page('/movies/add', addMoviePage); //!!! така не се бие със следващия route /movies/:movieId
page('/my-movies', myMoviesPage);
page('/movies/:movieId/edit', editMoviePage); //!!! така не се бие със следващия route /movies/:movieId
page('/movies/:movieId', movieDetailsPage);
page('/movies/:movieId/delete', deleteMoviePage);




page.start();
