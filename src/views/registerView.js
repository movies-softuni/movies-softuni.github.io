import { html } from '//unpkg.com/lit-html@2.2.3?module';
import * as authService from '../services/authService.js';

const registerTemplate = (onSubmit) => html`
<div class="register-container">
    <h3>Register Page</h3>

    <form @submit=${onSubmit}>
        <div class="mb-3 row">
            <label for="email" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="email" name="email">
            </div>
        </div>

        <div class="mb-3 row">
            <label for="password" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="password" name="password">
            </div>
        </div>

        <div class="mb-3 row">
            <label for="username" class="col-sm-2 col-form-label">Username (Optional)</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="username" name="username">
            </div>
        </div>

        <div class="mb-3 row">
            <div style="width: 150px">
                <input type="submit" class="form-control">
            </div>
        </div>
    </form>
</div>`;

export function registerPage(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let email = formData.get('email').trim();
        let password = formData.get('password').trim();

        if (!email || !password) {
            alert();
            return;
        }

        authService.register(email, password)
            .then(() => {  //when successfully registered
                ctx.page.redirect('/');
            })

    };

    ctx.renderProp(registerTemplate(onSubmit));
}