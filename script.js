// Group 404 — Campus Food Finder
// Shared JS: mobile nav toggle + vendor search filter

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile nav toggle ----
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // ---- Vendor search filter (home page only) ----
  var searchInput = document.getElementById('vendorSearch');
  var vendorCards = document.querySelectorAll('.vendor-card');
  var noResults = document.querySelector('.no-results');

  if (searchInput && vendorCards.length) {
    searchInput.addEventListener('input', function () {
      var query = searchInput.value.trim().toLowerCase();
      var visibleCount = 0;

      vendorCards.forEach(function (card) {
        var haystack = card.textContent.toLowerCase();
        var matches = haystack.indexOf(query) !== -1;
        card.style.display = matches ? '' : 'none';
        if (matches) visibleCount++;
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  }

  // ---- Footer year ----
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
