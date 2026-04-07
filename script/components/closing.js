(function () {
  window.Components = window.Components || {};

  window.Components.closing = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-closing";
      div.innerHTML = `
        <p class="closing-text">${
          section.text || "That's it, i hope you liked it."
        }</p>
        <p class="replay-btn" id="replay">${
          section.replayText || "Or click, if you want to watch it again."
        }</p>
        <p class="last-smile">:)</p>
      `;
      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const ideaIn = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" };
      tl.from(el.querySelectorAll("p"), {
        duration: 0.8, ...ideaIn, stagger: 1.0,
      })
      // Ensure the text becomes solid and interactive
      .set(el.querySelectorAll("p"), { opacity: 1, pointerEvents: "auto" })
      .to(el.querySelector(".last-smile"), {
        duration: 0.5, rotation: 90,
      }, "+=0.5");
    },
  };
})();
