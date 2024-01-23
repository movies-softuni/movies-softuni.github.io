import {getToken} from './authService.js';

function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) { //we have data
        options.headers['Content-Type'] = 'application/json';
        // options.headers['Access-Control-Allow-Origin'] = '*';
        options.body = JSON.stringify(data);
    }

    const token = getToken();
    if (token) {
        options.headers['X-Authorization'] = token;
    }     

    /*
    if (method != 'GET') {
        options = {
            method,
            headers: {
                'Content-type': 'application/json'
                //...(token && {'X-Authorization' : token})  // a hacker option for if - spread the null and spread the object
            },
            body: JSON.stringify(data)
        }
    } */   

    return fetch(url, options)
        .then(resp => {
            //the logout does not return a body/reponse
            // console.log(resp);
            if (resp.url.endsWith('logout')) {
                return resp
            } else {
                return resp.json();
            }            
        } );  //return response = promise
}

//When many items/Classes we save/edit/delete, then it is better to use like this below:
export const get = request.bind(null, 'GET'); //bind the 1st argument of request function to be 'GET'
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');


