import * as request from './requester.js';
import * as apiEndPnts from './apiEndPoints.js';

// We can use function expressions
export const getAll = () => request.get(apiEndPnts.movies);

export const search = (text) => request.get(`${apiEndPnts.movies}?where=title%20LIKE%20"${text}"`); //we return a promise from the request.get()

export const getOneMovie = 
(id) => request.get(`${apiEndPnts.movies}/${id}`); //we return a promise from the request.get()

export const createMovie = 
(title, imageUrl, description) => request.post(apiEndPnts.movies, {title, img: imageUrl, description}); //we return a promise from the request.post()

export const getMyMovies = 
(ownerId) => request.get(`${apiEndPnts.movies}?where=_ownerId%3D"${ownerId}"`); //we return a promise

export const updateMovie = 
(movieId, title, imageUrl, description) => request.put(`${apiEndPnts.movies}/${movieId}`, {title, img: imageUrl, description}); //we return a promise

export const deleteMovie = 
(movieId) => request.del(`${apiEndPnts.movies}/${movieId}`);