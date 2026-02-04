document.addEventListener("DOMContentLoaded", function () {
  // --- Lógica del Email (Siempre se ejecuta) ---
  const u = "hola",
    d = "gofiodesign.eu";
  const container = document.getElementById("email-placeholder");
  if (container) {
    const email = u + "@" + d;
    container.innerHTML = `<a href="mailto:${email}" class="contact-link">${email}</a>`;
  }

  // Año dinámico para el footer
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- Lógica de Consentimiento RGPD ---
  const consent = localStorage.getItem("cookieConsent");
  if (consent === "true") {
    if (document.getElementById("cookie-banner")) {
      document.getElementById("cookie-banner").style.display = "none";
    }
    loadGTM();
  } else if (consent === "false") {
    if (document.getElementById("cookie-banner")) {
      document.getElementById("cookie-banner").style.display = "none";
    }
  }
});

// Funciones globales para los botones del banner
function loadGTM() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = document.getElementsByTagName("script")[0];
  var j = document.createElement("script");
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=GTM-55DKZ9C5";
  f.parentNode.insertBefore(j, f);
}

function acceptCookies() {
  document.getElementById("cookie-banner").style.display = "none";
  localStorage.setItem("cookieConsent", "true");
  loadGTM();
}

function rejectCookies() {
  document.getElementById("cookie-banner").style.display = "none";
  localStorage.setItem("cookieConsent", "false");
}
