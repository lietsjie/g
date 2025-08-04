(() => {
  const currentTheme = localStorage.getItem("theme") || "original";

  function applyBeachTheme(overlay) {
    if (!overlay) return;
    overlay.style.cssText += `
      background: linear-gradient(to bottom right,#001a1a,#003333);
      border: 2px solid #66cccc;
      color: #e0ffff;
      box-shadow: 0 0 40px rgba(0,255,255,.4);
      font-family: 'Poppins',sans-serif;
    `;
  }

  function injectSwitcher() {
    /* ---------- BUTTON ---------- */
    const btn = document.createElement("div");
    btn.id = "theme-switcher-btn";
    btn.textContent = "Themes";
    btn.style.cssText = `
      position:fixed;top:20px;right:20px;
      background:linear-gradient(135deg,#0f2027,#203a43,#2c5364);
      padding:12px 20px;border-radius:30px;
      font:500 16px 'Poppins',sans-serif;color:#e0ffff;
      cursor:pointer;z-index:2147483647;
      box-shadow:0 0 20px rgba(0,255,255,.3);
      transition:.3s all ease;backdrop-filter:blur(4px);
    `;

    /* ---------- DROPDOWN ---------- */
    const dd = document.createElement("div");
    dd.id = "theme-dropdown";
    dd.style.cssText = `
      position:fixed;top:70px;right:20px;
      display:none;flex-direction:column;gap:12px;
      padding:12px 20px;border-radius:16px;
      background:rgba(0,30,30,.6);backdrop-filter:blur(10px);
      z-index:2147483647;box-shadow:0 0 24px rgba(0,255,255,.2);
    `;

    [
      ["Original","original"],
      ["The Beach (2000)","beach"],
    ].forEach(([label,val])=>{
      const b=document.createElement("button");
      b.textContent=label;
      b.style.cssText=`
        background:linear-gradient(135deg,#004d4d,#001a1a);
        border:none;border-radius:10px;padding:8px 14px;
        font:15px 'Poppins',sans-serif;color:#e0ffff;cursor:pointer;
        transition:.2s transform ease,.2s box-shadow ease;
        box-shadow:0 0 10px rgba(0,255,255,.2);
      `;
      b.onmouseenter=()=>{b.style.transform="scale(1.05)";b.style.boxShadow="0 0 16px rgba(0,255,255,.4)";}
      b.onmouseleave=()=>{b.style.transform="scale(1)";b.style.boxShadow="0 0 10px rgba(0,255,255,.2)";}
      b.onclick=()=>{localStorage.setItem("theme",val);location.reload();}
      dd.appendChild(b);
    });

    btn.onclick=()=>{dd.style.display=dd.style.display==="none"?"flex":"none";};

    document.body.append(btn,dd);
  }

  /* --------- MAIN FLOW --------- */
  injectSwitcher();                                // create button immediately
  const overlay = document.getElementById("simulator-overlay");
  if (currentTheme === "beach") applyBeachTheme(overlay);

  // in case overlay is mounted later
  const mo = new MutationObserver(muts=>{
    const ov=document.getElementById("simulator-overlay");
    if (ov) { applyBeachTheme(ov); mo.disconnect(); }
  });
  mo.observe(document.documentElement,{childList:true,subtree:true});
})();
