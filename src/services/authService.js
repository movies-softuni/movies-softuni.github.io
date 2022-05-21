import * as request from './requester.js';
import * as api from './apiEndPoints.js';

function saveUserData({ _id, email, accessToken }) {
    localStorage.setItem('_id', _id);
    localStorage.setItem('email', email);
    localStorage.setItem('accessToken', accessToken);
}

export function getUsrData() {
    let _id = localStorage.getItem('_id');
    let email = localStorage.getItem('email');
    let accessToken = getToken();

    return {_id, email, accessToken};    
}

export function getToken() {
    let accessToken = localStorage.getItem('accessToken');

    return accessToken;
}

export function login(email, password) {
    return request.post(api.login, { email, password })   //we take the response from request.post
        .then(data => {  //we resolve here the response
            saveUserData(data);
        });
}

export function isAuthenticated() {
    const token = localStorage.getItem('accessToken');

    return Boolean(token);
}

export function logout() {
   return request.get(api.logout)
        .then(resp => {        //the promise is resolved here
            localStorage.clear();
            // localStorage.removeItem('');

            return resp;
        });

}