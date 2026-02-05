document.addEventListener("DOMContentLoaded", function () {
  // 1. AÑO DINÁMICO
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. LÓGICA DEL EMAIL
  const u = "hola",
    d = "gofiodesign.eu";
  const container = document.getElementById("email-placeholder");
  if (container) {
    const email = u + "@" + d;
    container.innerHTML = `<a href="mailto:${email}" class="contact-link">${email}</a>`;
  }

  // 3. CONSENTIMIENTO RGPD
  const consent = localStorage.getItem("cookieConsent");
  const banner = document.getElementById("cookie-banner");

  if (consent === "true") {
    if (banner) banner.style.display = "none";
    loadAnalytics(); // Carga todo si ya aceptó antes
  } else if (consent === "false") {
    if (banner) banner.style.display = "none";
  }
});

// FUNCIÓN PARA CARGAR GTM Y GA4 (Solo tras consentimiento)
function loadAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-J0176MK9D0");

  // Cargar Script de Google Analytics (gtag.js)
  var gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-J0176MK9D0";
  document.head.appendChild(gaScript);

  // Cargar Script de Tag Manager (GTM)
  var gtmScript = document.createElement("script");
  gtmScript.async = true;
  gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-55DKZ9C5";
  document.head.appendChild(gtmScript);

  // Evento de inicio para GTM
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
}

function acceptCookies() {
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.style.display = "none";
  localStorage.setItem("cookieConsent", "true");
  loadAnalytics();
}

function rejectCookies() {
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.style.display = "none";
  localStorage.setItem("cookieConsent", "false");
}
