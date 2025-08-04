// THE BEACH THEME
(function () {
  const currentTheme = localStorage.getItem("theme") || "original";

  function initThemeSwitcher() {
    const overlay = document.getElementById("simulator-overlay");
    if (!overlay) return;

    // themes button
    const themeBtn = document.createElement("div");
    themeBtn.innerText = "Themes";
    themeBtn.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      padding: 14px 24px;
      border-radius: 30px;
      font-family: 'Poppins', sans-serif;
      font-size: 17px;
      font-weight: 500;
      color: #e0ffff;
      cursor: pointer;
      z-index: 10000;
      box-shadow: 0 0 20px rgba(0,255,255,0.3);
      transition: all 0.3s ease;
      backdrop-filter: blur(4px);
    `;

    // dropdown container
    const dropdown = document.createElement("div");
    dropdown.style.cssText = `
      position: absolute;
      top: 70px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 30, 30, 0.6);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 12px 20px;
      display: none;
      flex-direction: column;
      gap: 12px;
      z-index: 10001;
      box-shadow: 0 0 24px rgba(0,255,255,0.2);
    `;

    const options = [
      { name: "Original", value: "original" },
      { name: "The Beach", value: "beach" }
    ];

    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.innerText = opt.name;
      btn.style.cssText = `
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.2);
        color: #e0ffff;
        font-size: 15px;
        padding: 8px 14px;
        border-radius: 10px;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        transition: all 0.2s ease;
      `;
      btn.addEventListener("mouseenter", () => {
        btn.style.background = "rgba(255,255,255,0.15)";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.background = "rgba(255,255,255,0.05)";
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

    // apply beach theme
    if (currentTheme === "beach") {
      overlay.style.background = "linear-gradient(to bottom right, #001a1a, #003333)";
      overlay.style.border = "2px solid #66cccc";
      overlay.style.color = "#e0ffff";
      overlay.style.boxShadow = "0 0 40px rgba(0,255,255,0.4), 0 0 20px rgba(255,255,255,0.1)";
      overlay.style.fontFamily = "'Poppins', sans-serif";

      themeBtn.style.background = "linear-gradient(135deg, #003333, #001a1a)";
      themeBtn.style.color = "#e0ffff";
      themeBtn.style.boxShadow = "0 0 20px rgba(0,255,255,0.4)";

      const newImages = [
        "https://i.pinimg.com/1200x/96/2d/7d/962d7da83406856e305eefc660d8e5ec.jpg",
        "https://i.pinimg.com/736x/8a/e2/cc/8ae2ccc26509e4c9fb8f38286e1733c3.jpg"
      ];
      const floatingImg = overlay.querySelector("img");
      if (floatingImg) {
        floatingImg.src = newImages[Math.floor(Math.random() * newImages.length)];
        floatingImg.style.borderRadius = "12px";
        floatingImg.style.boxShadow = "0 0 20px rgba(0,255,255,0.3)";
      }

      const newPhrases = [
        "🌴 Lost in paradise",
        "🌀 The beach is not a place, it's a feeling",
        "🌅 Somewhere between the waves",
        "🧭 Searching for something real"
      ];
      const rightText = overlay.querySelector("div:nth-child(2)");
      if (rightText) {
        rightText.innerText = newPhrases[Math.floor(Math.random() * newPhrases.length)];
        rightText.style.fontSize = "18px";
        rightText.style.fontWeight = "500";
        rightText.style.textShadow = "0 0 6px rgba(0,255,255,0.3)";
      }
    }
  }
// music Button
      const musicButton = document.querySelector("button:contains('🎵 Music')");
      if (musicButton) {
        musicButton.style.background = "linear-gradient(135deg, #004d4d, #006666)";
        musicButton.style.color = "#e0ffff";
        musicButton.style.boxShadow = "0 0 12px rgba(0,255,255,0.3)";
        musicButton.onmouseenter = () => {
          musicButton.style.transform = "scale(1.05)";
          musicButton.style.boxShadow = "0 0 18px rgba(0,255,255,0.5)";
        };
        musicButton.onmouseleave = () => {
          musicButton.style.transform = "scale(1)";
          musicButton.style.boxShadow = "0 0 12px rgba(0,255,255,0.3)";
        };
      }

      // leo box
      const leoBox = document.querySelector("div:contains('Leo')");
      if (leoBox) {
        leoBox.style.background = "rgba(0, 40, 40, 0.7)";
        leoBox.style.color = "#e0ffff";
        leoBox.style.fontFamily = "'Georgia', serif";
        leoBox.style.fontStyle = "italic";
        leoBox.style.textShadow = "0 0 6px rgba(0,255,255,0.3)";
      }

      // bottom text
      const bottomText = overlay.querySelector("div:contains('CTRL + ALT')");
      if (bottomText) {
        bottomText.style.color = "#66cccc";
        bottomText.style.textShadow = "0 0 6px rgba(0,255,255,0.3)";
        bottomText.style.fontFamily = "'Poppins', sans-serif";
      }

      // simulator buttons
      const simButtons = Array.from(document.querySelectorAll("button")).filter(btn =>
        ["Flash sim;)", "Simulator 2"].includes(btn.innerText)
      );
      simButtons.forEach(btn => {
        btn.style.background = "linear-gradient(90deg, #004d4d, #006666)";
        btn.style.color = "#e0ffff";
        btn.style.boxShadow = "0 0 12px rgba(0,255,255,0.3)";
        btn.onmouseenter = () => {
          btn.style.transform = "scale(1.1)";
          btn.style.boxShadow = "0 0 18px rgba(0,255,255,0.5)";
        };
        btn.onmouseleave = () => {
          btn.style.transform = "scale(1)";
          btn.style.boxShadow = "0 0 12px rgba(0,255,255,0.3)";
        };
      });

      // leo quotes button
      const leoBtn = document.querySelector("button.leo-romantic");
      if (leoBtn) {
        leoBtn.style.background = "linear-gradient(135deg, #004d4d, #006666)";
        leoBtn.style.color = "#e
  // wait for dom & overlay
  const waitForReady = setInterval(() => {
    if (document.readyState === "complete" && document.getElementById("simulator-overlay")) {
      clearInterval(waitForReady);
      initThemeSwitcher();
    }
  }, 200);
})();
