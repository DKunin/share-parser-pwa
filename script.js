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
const text = parsedUrl.searchParams.get('description');

if (text) {
    fetch(`https://wt-info-dkunin_ru-0.sandbox.auth0-extend.com/open-graph-scrapper?url=${text}`).then(res => res.json()).then(result => {
        appNode.innerHTML = `<a href="http://rarbgmirror.xyz/torrents.php?search=${result.title}">${result.title}</a>`;
        window.location = `http://rarbgmirror.xyz/torrents.php?search=${result.title}`;
    })
}

