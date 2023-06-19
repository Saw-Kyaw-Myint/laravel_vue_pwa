const API_CACHE_NAME = "api-cache";
const API_URLS = ["/api/posts", "/api/post"];

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (API_URLS.some((url) => request.url.includes(url))) {
    event.respondWith(fetchAndCache(request));
  } else {
    event.respondWith(cacheFirst(request));
  }
});

async function fetchAndCache(request) {
  const cache = await caches.open(API_CACHE_NAME);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    return (
      cachedResponse ||
      new Response(null, { status: 404, statusText: "Not found" })
    );
  }
}

async function cacheFirst(request) {
  const cacheResponse = await caches.match(request);
  return cacheResponse || fetch(request);
}
