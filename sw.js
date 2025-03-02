const CACHE_NAME = 'dpal-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/Diet-Planner.html',
  '/Workout-Planner.html',
  '/BMI-Calculator.html',
  '/CAGR-Calculator.html',
  '/Retirement-Planner.html',
  '/Loan-Analyzer.html',
  '/Meditation-Timer.html',
  '/Mood-Tracker.html',
  '/Gratitude-Journal.html',
  '/styles.css',
  '/app.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
