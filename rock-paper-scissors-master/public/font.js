function addFontLinks() {
  const head = document.head;

  const preconnectGoogleFonts = document.createElement("link");
  preconnectGoogleFonts.rel = "preconnect";
  preconnectGoogleFonts.href = "https://fonts.googleapis.com";
  head.appendChild(preconnectGoogleFonts);

  const preconnectFontsGstatic = document.createElement("link");
  preconnectFontsGstatic.rel = "preconnect";
  preconnectFontsGstatic.href = "https://fonts.gstatic.com";
  preconnectFontsGstatic.crossOrigin = true;
  head.appendChild(preconnectFontsGstatic);

  const fontStylesheet = document.createElement("link");
  fontStylesheet.href =
    "https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap";
  fontStylesheet.rel = "stylesheet";
  head.appendChild(fontStylesheet);

  document.body.style.fontFamily = "Montserrat, sans-serif";
}

addFontLinks();
