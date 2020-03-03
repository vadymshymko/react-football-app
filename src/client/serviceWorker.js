import { skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { BroadcastUpdatePlugin } from 'workbox-broadcast-update';

skipWaiting();
clientsClaim();

/* eslint-disable */
precacheAndRoute(self.__WB_MANIFEST);
/* eslint-enable */

registerRoute(
  new RegExp(`${process.env.APP_API_ROOT}.*`),
  new StaleWhileRevalidate({
    cacheName: 'APICache',
    plugins: [new BroadcastUpdatePlugin()],
  }),
  'GET'
);

registerRoute(
  new RegExp('/*'),
  new StaleWhileRevalidate({
    cacheName: 'pagesCache',
    plugins: [
      new BroadcastUpdatePlugin({
        headersToCheck: ['ETag'],
      }),
    ],
  }),
  'GET'
);

registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);
