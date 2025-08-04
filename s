// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-08-03
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();

const themes = {
  beach: {
    name: "The Beach",
    background: "url('https://i.pinimg.com/736x/74/f5/b1/74f5b1a6505911ceda7a81e31a454398.jpg')",
    font: "'Pacifico', cursive",
    colors: {
      primary: "#f4e2d8",
      accent: "#00aaff"
    },
    images: [
      "https://i.pinimg.com/736x/68/08/c4/6808c489a0b7628ccd7b28e38754815b.jpg",
      "https://i.pinimg.com/736x/74/f5/b1/74f5b1a6505911ceda7a81e31a454398.jpg"
    ]
  }
};

function applyTheme(themeKey) {
  const theme = themes[themeKey];
  if (!theme) return;

  document.body.style.backgroundImage = theme.background;
  document.body.style.fontFamily = theme.font;
  document.body.style.color = theme.colors.primary;

  // Floating images
  let floatContainer = document.getElementById("floatImages");
  if (!floatContainer) {
    floatContainer = document.createElement("div");
    floatContainer.id = "floatImages";
    document.body.appendChild(floatContainer);
  }
  floatContainer.innerHTML = "";
  theme.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "floating";
    floatContainer.appendChild(img);
  });
}

// Add theme selector button
function createThemeSelector() {
  const selector = document.createElement("select");
  selector.id = "themeSelector";
  selector.style.position = "fixed";
  selector.style.top = "10px";
  selector.style.right = "10px";
  selector.style.zIndex = "9999";
  selector.style.padding = "5px";
  selector.style.borderRadius = "5px";
  selector.style.backgroundColor = "#ffffffaa";

  Object.keys(themes).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = themes[key].name;
    selector.appendChild(option);
  });

  selector.onchange = () => applyTheme(selector.value);
  document.body.appendChild(selector);
}

createThemeSelector();
//
function injectCSS(css) {
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
}
injectCSS(`
  .floating {
    position: absolute;
    width: 100px;
    animation: float 20s infinite ease-in-out;
    opacity: 0.8;
  }

  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }

  #themeSelector {
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    border: 1px solid #ccc;
  }
`);

