import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'
import { NavigationRoute, registerRoute } from 'workbox-routing'

declare let self: ServiceWorkerGlobalScope

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)

// clean old assets
cleanupOutdatedCaches()

let allowlist: undefined | RegExp[]
// if (import.meta.env.DEV) allowlist = [/^\/$/]

// to allow work offline
registerRoute(
  new NavigationRoute(createHandlerBoundToURL('index.html'), { allowlist })
)

self.skipWaiting()
clientsClaim()

self.addEventListener('install', () => {
  console.log('Service Worker installing.')
})

self.addEventListener('activate', () => {
  console.log('Service Worker activating.')
})
