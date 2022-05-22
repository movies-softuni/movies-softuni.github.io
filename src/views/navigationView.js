import { html } from '//unpkg.com/lit-html?module';
import * as authService from '../services/authService.js';
import * as movieService from '../services/movieService.js';


const showUserInfo = (email) => html`
<span>Welcome, ${email}</span>`;

const guestButtons = () => html`
<a class="nav-link" href="/login">Login</a>
<a class="nav-link" href="/register">Register</a>
`;

const privateButtons = (onLogout) => html`
<a class="nav-link" href="/my-movies">My Movies</a>
<a class="nav-link" href="/movies/add">Add Movie</a>
<a class="nav-link" @click=${onLogout} href="javascript:void(0)">Logout</a>
`;

const navigationTemplate = ({
    isAuthenticated,
    email }, onLogout, onSearch) => html`
<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">MovieDB</a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                <a class="nav-link" href="/movies">Movies</a>
                ${isAuthenticated ? privateButtons(onLogout) : guestButtons()}
            </div>
            <form @submit=${onSearch} class="d-flex" role="search">
                <input class="form-control me-2" type="search" name="search-text" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            ${isAuthenticated && showUserInfo(email)}
            <!-- if anthenticated, then show user info -->
        </div>
    </div>
</nav>`;

export function renderNavigator(ctx) {
    const onLogout = (e) => {
        e.preventDefault();

        authService.logout()
            .then(() => {
                ctx.page.redirect("/");
            });
    };

    const onSearch = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        const searchText = encodeURIComponent(formData.get('search-text').trim());

        if (searchText) {
            if(searchText.includes('%')) {
                return alert('You can not include % in the search');
            }
            ctx.page.redirect(`/movies?search=${searchText}`);
        } else {
            return alert('Please, eneter a tex to to search for!');
        }         
    };

    return navigationTemplate(ctx, onLogout, onSearch);
}