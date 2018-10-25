'use strict';

const appNode = document.querySelector('.app');


if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('service-worker.js')
        .then(function(registration) {
            // Registration Success
            console.log(
                '[serviceWorker]: registration successful with scope: ',
                registration.scope
            );
        })
        .catch(function(err) {
            // Registration failed :(
            console.log('[serviceWorker] registration failed', err);
        });
}


var parsedUrl = new URL(window.location.toString());
console.log('Title shared: ' + parsedUrl.searchParams.get('name'));
console.log('Text shared: ' + parsedUrl.searchParams.get('description'));
console.log('URL shared: ' + parsedUrl.searchParams.get('link'));


appNode.innerHTML = `
    <div>Name:${parsedUrl.searchParams.get('name')}</div>
    <div>description:${parsedUrl.searchParams.get('description')}</div>
    <div>link:${parsedUrl.searchParams.get('link')}</div>
`;
