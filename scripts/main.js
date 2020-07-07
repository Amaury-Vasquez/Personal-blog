function headerTemplate() {
  return `
  <section class="header-top">
        <div class="title">
          <h3 class="name">Amaury Vasquez</h3>
        </div>
        <nav>
          <a href="index.html"> Inicio </a>
          <a href="proyectos.html"> Proyectos </a>
          <a href="tutoriales.html"> Tutoriales</a>
          <a href="pensamientos.html"> Pensamientos</a>
        </nav>
      </section>
      <section class="header-bottom">
        <div class="logo">
          <img src="assets/images/logo.png" alt="logo blog" />
        </div>
        <a href="amaury.html"> Sobre mi </a>
      </section>
  `;
}

function footerTemplate() {
  return `
      <p>amaury.vasquezenriquez@gmail.com</p>
      <div class="contact">
        <p>redes sociales</p>
        <div class="social-media">
          <a
            href="https://twitter.com/AmauryVasquez11"
            class="media-icon"
            target="_blank"
          >
            <span class="twitter"></span>
          </a>
          <a
            href="https://www.instagram.com/vasquezamaury/"
            class="media-icon"
            target="_blank"
          >
            <span class="instagram"></span>
          </a>
          <a
            href="https://github.com/Amaury-Vasquez"
            class="media-icon"
            target="_blank"
          >
            <span class="github"></span>
          </a>
          <a
            href="https://www.facebook.com/amaury.vasquezenriquez/"
            class="media-icon"
            target="_blank"
          >
            <span class="facebook"></span
          ></a>
        </div>
      </div>`;
}

function createElement(HTMLString) {
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = HTMLString;
  return html;
}
function containerAppend(container, html) {
  const len = html.body.children.length;
  for (let i = 0; i < len; i++) container.append(html.body.children[0]);
}

(function addHeader() {
  const $header = document.querySelector("header");
  $header.classList.add("header");
  const html = createElement(headerTemplate());
  containerAppend($header, html);
  console.log("Header added");
})();

(function addFooter() {
  const $footer = document.querySelector("footer");
  $footer.classList.add("footer");
  const html = createElement(footerTemplate());
  containerAppend($footer, html);
  console.log("footer added");
})();
