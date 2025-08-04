(function () {
  const currentTheme = localStorage.getItem("theme") || "original";

  function initThemeSwitcher() {
    const overlay = document.getElementById("simulator-overlay");
    if (!overlay) {
      console.warn("simulator-overlay not found");
      return;
    }

    // 🌟 Themes Button
    const themeBtn = document.createElement("div");
    themeBtn.id = "theme-switcher-btn";
    themeBtn.innerText = "Themes";
    themeBtn.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      padding: 12px 20px;
      border-radius: 30px;
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: 500;
      color: #e0ffff;
      cursor: pointer;
      z-index: 9999;
      box-shadow: 0 0 20px rgba(0,255,255,0.3);
      transition: all 0.3s ease;
      backdrop-filter: blur(4px);
    `;

    // 🌊 Dropdown
    const dropdown = document.createElement("div");
    dropdown.id = "theme-dropdown";
    dropdown.style.cssText = `
      position: fixed;
      top: 70px;
      right: 20px;
      background: rgba(0, 30, 30, 0.6);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 12px 20px;
      display: none;
      flex-direction: column;
      gap: 12px;
      z-index: 9999;
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

    console.log("Theme switcher injected");

    // Apply Beach Theme
    if (currentTheme === "beach") {
      overlay.style.background = "linear-gradient(to bottom right, #001a1a, #003333)";
      overlay.style.border = "2px solid #66cccc";
      overlay.style.color = "#e0ffff";
      overlay.style.boxShadow = "0 0 40px rgba(0,255,255,0.4)";
      overlay.style.fontFamily = "'Poppins', sans-serif";
    }
  }

  const waitForReady = setInterval(() => {
    if (document.readyState === "complete" && document.body) {
      clearInterval(waitForReady);
      initThemeSwitcher();
    }
  }, 200);
})();
