document.addEventListener("DOMContentLoaded", function() {
    const u = "hola", d = "gofiodesign.eu";
    const container = document.getElementById("email-placeholder");
    if (container) {
        const email = u + "@" + d;
        container.innerHTML = `<a href="mailto:${email}" class="contact-link">${email}</a>`;
    }
});