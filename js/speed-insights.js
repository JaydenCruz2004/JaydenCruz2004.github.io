(function initSpeedInsightsRouteTracking() {
  if (typeof window === 'undefined') {
    return;
  }

  window.__VERCEL_SPEED_INSIGHTS__ = window.__VERCEL_SPEED_INSIGHTS__ || [];

  window.__VERCEL_SPEED_INSIGHTS__.push({
    route: window.location.pathname || '/'
  });
})();
