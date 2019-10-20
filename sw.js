var FluxAppBuild = '1113';

self.addEventListener('install', function(event) {
    self.skipWaiting();
    event.waitUntil(caches.open(FluxAppBuild).then(function(cache) {
        return cache.addAll([
            './', './index.html',
            './main.css', 
            './main.js', 
            './sw.js', 
            './AppView.css', 
            './auth.js',
            './bodyHtml.js',
            './ripple.js',
            './changelog.js',
            './settingsLoader.js',
            './manifest.webmanifest',
            './Assets/AppIcon.png', 
            './Assets/favicon.ico', 
            './Assets/AppIcon512.png', 
            './Assets/favicon-16x16.png', 
            './Assets/favicon-32x32.png', 
            './Fonts/RobotoML.woff2',
            './Fonts/RobotoMC.woff2',
            './firestore.js',
            './PrintLite.js',
            './SignIn/index.html',
            './SignIn/firebase.js',
            './SignIn/desktop.css',
            './SignIn/main.css',
            './SignIn/Assets/BackgroundLogo.svg',
            './SignIn/Assets/Next.svg',
            './SignIn/Assets/SimpleLogo.svg',
            './SignIn/Assets/WelcomeText.svg',
            './SignIn/main.js'
        ]);
    }));
});

self.addEventListener('activate', function(event) {
    event.waitUntil(caches.keys().then(function(cacheNames) {
        return Promise.all(cacheNames.filter(function(cacheName) {
            if (FluxAppBuild != cacheName) { return true;
            } else { return false; }
        }).map(function(cacheName) {
            return caches.delete(cacheName);
        }));
    }));
    return self.clients.claim();
});

/*self.addEventListener('fetch', async function(event) {
    indexedDB.open("NotesDB").onsuccess = function(event) { 
        event.target.result.transaction(["Settings"], 'readwrite').objectStore("Settings").getAll().onsuccess = e => { 
            if (e.target.result.length == 0) LoadAppSW = 'Network';
            else LoadAppSW = e.target.result[1].value; 
        }
    }
    if (typeof(LoadAppSW) == 'undefined') LoadAppSW = 'Network';
    if (LoadAppSW == 'Network' && staticElements.indexOf(event.request.url) == -1) { 
        var dataRespond = fetch(event.request).then(r => { 
            SWOnline = true; return r  
        }).catch(() => { 
            SWOnline = false; return caches.match(event.request);
        })
    } else {
        var dataRespond = caches.match(event.request).then(r => { 
            return r || fetch(event.request).then(r => { SWOnline = true; return r; })
            .catch(() => { SWOnline = false; })
        })
    }
    event.respondWith(dataRespond.then(async r => { 
        if ((self.location.origin+'/changelog.js' == event.request.url) && r == undefined) { 
            return await caches.match('./changelog.offline.js');
        } else { return dataRespond }
    }))
    clients.get(event.clientId).then(c => { try { c.postMessage({ type: "AppOnline", value: SWOnline })}catch{}});
});*/

self.addEventListener('fetch', async function(event) {
    if (event.request.url == self.location.origin+'/changelog.js'){
        event.respondWith(fetch(event.request).then(r => { 
            SWOnline = true; return r  
        }).catch(() => { 
            SWOnline = false; return caches.match(event.request);
        }));
    } else {
        event.respondWith(caches.match(event.request)
            .then(r => { return r || fetch(event.request).then(r => { SWOnline = true; return r; })})
            .catch(() => { SWOnline = false; })
        );
    }
    /*event.respondWith(dataRespond.then(async r => { 
        if ((self.location.origin+'/changelog.js' == event.request.url) && r == undefined) { 
            return await caches.match('./changelog.offline.js');
        } else { return dataRespond }
    }))*/
    clients.get(event.clientId).then(c => { try { c.postMessage({ type: "AppOnline", value: SWOnline })}catch{}});
});
