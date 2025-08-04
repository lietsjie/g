//THEME 1 (THE BEACH)
(function () {
  const currentTheme = localStorage.getItem("theme") || "original";

  // apply theme immediately on load
  if (currentTheme === "beach") applyBeachTheme();

  // themes button
  const themeBtn = document.createElement("div");
  themeBtn.innerText = "Themes";
  themeBtn.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #ffccff, #cc99ff);
    padding: 12px 20px;
    border-radius: 20px;
    font-family: 'Segoe UI', sans-serif;
    font-size: 16px;
    color: white;
    cursor: pointer;
    z-index: 10000;
    box-shadow: 0 0 12px rgba(255,255,255,0.3);
    transition: all 0.3s ease;
  `;

  // drowpdown  container
  const dropdown = document.createElement("div");
  dropdown.style.cssText = `
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(6px);
    border-radius: 12px;
    padding: 10px 16px;
    display: none;
    flex-direction: column;
    gap: 10px;
    z-index: 10001;
    box-shadow: 0 0 16px rgba(0,0,0,0.3);
  `;

  const options = [
    { name: "Original", value: "original" },
    { name: "The Beach", value: "beach" }
  ];

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt.name;
    btn.style.cssText = `
      background: transparent;
      border: none;
      color: #fff;
      font-size: 14px;
      padding: 6px 10px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.2s ease;
    `;
    btn.addEventListener("mouseenter", () => {
      btn.style.background = "rgba(255,255,255,0.2)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.background = "transparent";
    });
    btn.addEventListener("click", () => {
      localStorage.setItem("theme", opt.value);
      location.reload();
    });
    dropdown.appendChild(btn);
  });

  themeBtn.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "none" ? "flex" : "none";
  });

  document.body.appendChild(themeBtn);
  document.body.appendChild(dropdown);

  // beach theme
  function applyBeachTheme() {
    const overlay = document.getElementById("simulator-overlay");
    if (overlay) {
      overlay.style.background = "linear-gradient(to bottom right, #004d4d, #001a1a)";
      overlay.style.border = "2px solid #66cccc";
      overlay.style.color = "#e0ffff";
      overlay.style.boxShadow = "0 0 30px rgba(0,255,255,0.3), 0 0 10px rgba(255,255,255,0.1)";
    }

    const themeBtn = document.querySelector("div");
    if (themeBtn) {
      themeBtn.style.background = "linear-gradient(135deg, #006666, #003333)";
      themeBtn.style.color = "#e0ffff";
      themeBtn.style.boxShadow = "0 0 12px rgba(0,255,255,0.3)";
    }

    // diff floating image
    const newImages = [
      "https://i.pinimg.com/1200x/96/2d/7d/962d7da83406856e305eefc660d8e5ec.jpg",
      "https://i.pinimg.com/736x/8a/e2/cc/8ae2ccc26509e4c9fb8f38286e1733c3.jpg"
    ];
    const floatingImg = document.querySelector("#simulator-overlay img");
    if (floatingImg) {
      floatingImg.src = newImages[Math.floor(Math.random() * newImages.length)];
    }

    // phrases
    const newPhrases = ["test", "leotwotest"];
    const rightText = document.querySelector("#simulator-overlay div:nth-child(2)");
    if (rightText) {
      rightText.innerText = newPhrases[Math.floor(Math.random() * newPhrases.length)];
    }
  }
})();
