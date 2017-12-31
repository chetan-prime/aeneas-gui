/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/* eslint-env node */

module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/src/*.html',
    '/src/**/*.html',
    '/lib/webcomponentsjs/webcomponents-lite.js',
    '/images/manifest/**'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
  runtimeCaching: [
    {
      urlPattern: /\/lib\/.*/,
      handler: 'networkFirst',
      options: {
        cache: {
          maxAgeSeconds:60*60*24*10,
          maxEntries: 400,
          name: 'elements-cache'
        }
      }
    },
    {
      urlPattern: /\/src\/.*/,
      handler: 'networkFirst',
      options: {
        cache: {
          maxAgeSeconds:60*60*24,
          maxEntries: 50,
          name: 'src-elements-cache'
        }
      }
    },    
    {
      urlPattern: /\/assets\/.*/,
      handler: 'cacheFirst',
      options: {
        cache: {
          maxAgeSeconds:60*60*24*10,
          maxEntries: 200,
          name: 'images-cache'
        }
      }
    }
  ]
};
