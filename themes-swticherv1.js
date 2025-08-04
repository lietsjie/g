(function () {
  const currentTheme = localStorage.getItem("theme") || "original";

  function initThemeSwitcher() {
    const overlay = document.getElementById("simulator-overlay");
    if (!overlay) return;

    // 🌟 Themes Button
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
      { name: "The Beach (2000)", value: "beach" }
    ];

    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.innerText = opt.name;
      btn.style.cssText = `
        background: linear-gradient(135deg, #004d4d, #001a1a);
        border: none;
        color: #e0ffff;
        font-size: 15px;
        padding: 8px 14px;
        border-radius: 10px;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        box-shadow: 0 0 10px rgba(0,255,255,0.2);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      `;
      btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.boxShadow = "0 0 16px rgba(0,255,255,0.4)";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
        btn.style.boxShadow = "0 0 10px rgba(0,255,255,0.2)";
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

    // 🐚 Apply Beach Theme
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

      // 🎵 Music Button
      const musicButton = document.querySelector("button:contains('🎵 Music')");
      if (musicButton) {
        musicButton.style.background = "linear-gradient(135deg, #004d4d, #006666)";
        musicButton.style.color = "#e0ffff";
        musicButton.style.boxShadow = "0 0 12px rgba(0,255,255,0.3)";
        musicButton.style.fontWeight = "600";
        musicButton.style.fontSize = "15px";
      }

      // 💖 Leo Button
      const leoBtn = document.querySelector("button.leo-romantic");
      if (leoBtn) {
        leoBtn.style.background = "linear-gradient(135deg, #004d4d, #006666)";
        leoBtn.style.color = "#e0ffff";
        leoBtn.style.border = "1px solid #66cccc";
        leoBtn.style.boxShadow = "0 2px 6px rgba(0,255,255,0.3)";
        leoBtn.style.fontFamily = "'Courier New', monospace";
      }

      // 📝 Bottom Text
      const bottomText = overlay.querySelector("div:contains('CTRL + ALT')");
      if (bottomText) {
        bottomText.style.color = "#66cccc";
        bottomText.style.textShadow = "0 0 6px rgba(0,255,255,0.3)";
        bottomText.style.fontFamily = "'Poppins', sans-serif";
      }

      // 🕹️ Simulator Buttons
      const simButtons = Array.from(document.querySelectorAll("button")).filter(btn =>
        ["Flash sim;)", "Simulator 2"].includes(btn.innerText)
      );
      simButtons.forEach(btn => {
        btn.style.background = "linear-gradient(90deg, #004d4d, #006666)";
        btn.style.color = "#e0ffff";
        btn.style.boxShadow = "0 0 12px rgba(0,255,255,0.3)";
        btn.style.fontSize = "16px";
        btn.style.borderRadius = "10px";
      });

      // 💬 Leo Box
      const leoBox = Array.from(document.querySelectorAll("div")).find(div =>
        div.innerText && div.innerText.toLowerCase().includes("leo")
      );
      if (leoBox) {
        leoBox.style.background = "rgba(0, 40, 40, 0.7)";
        leoBox.style.color = "#e0ffff";
        leoBox.style.fontFamily = "'Georgia', serif";
        leoBox.style.fontStyle = "italic";
        leoBox.style.textShadow = "0 0 6px rgba(0,255,255,0.3)";
      }
    }
  }

  const waitForReady = setInterval(() => {
    if (document.readyState === "complete" && document.getElementById("simulator-overlay")) {
      clearInterval(waitForReady);
      initThemeSwitcher();
    }
  },
