(function() {
    'use strict';

    // Your code here...
})();
// themes.js

window.ClientThemes = {
    apply: function (theme) {
        localStorage.setItem("selectedTheme", theme);

        if (theme === "beach") {
            this.applyBeach();
        } else {
            this.applyOriginal();
        }
    },

    applyOriginal: function () {
        // Your original overlay creation code here
        console.log("[Theme] Original applied");
    },

    applyBeach: function () {
        // Your beach overlay creation + floating images here
        console.log("[Theme] Beach applied");

        const floats = [
            { src: "https://i.pinimg.com/736x/ff/7b/08/ff7b08a3d790c6d83e9d867f2fcb8cbf.jpg", text: "leowaow" },
            { src: "https://i.pinimg.com/1200x/96/2d/7d/962d7da83406856e305eefc660d8e5ec.jpg", text: "themetest" }
        ];

        floats.forEach((item, i) => {
            const img = document.createElement("img");
            img.src = item.src;
            img.style.cssText = `
                position: fixed;
                top: ${20 + i * 30}%;
                left: ${15 + i * 35}%;
                width: 200px;
                border-radius: 14px;
                opacity: 0.85;
                z-index: 9999;
            `;
            document.body.appendChild(img);

            const phrase = document.createElement("div");
            phrase.innerText = item.text;
            phrase.style.cssText = `
                position: fixed;
                top: ${20 + i * 30 + 24}%;
                left: ${15 + i * 35}%;
                color: #fff;
                font-size: 20px;
                font-family: 'Georgia', serif;
            `;
            document.body.appendChild(phrase);
        });
    }
};

// Auto-apply saved theme on load
window.addEventListener("load", () => {
    const theme = localStorage.getItem("selectedTheme") || "original";
    window.ClientThemes.apply(theme);
});
