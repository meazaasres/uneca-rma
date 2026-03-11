(function () {
  // If browser reports offline at startup, navigate to a remote URL so
  // the browser shows its native network error page instead of app UI.
  try {
    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      window.location.replace("https://example.com/");
    }
  } catch (e) {
    // No-op: keep default behavior if detection is unavailable.
  }
})();
