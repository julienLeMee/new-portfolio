export function initGlowAnimation() {
    const glowingCards = document.querySelectorAll(".glow-section__card");
    const glowSection = document.querySelector(".glow-section");

    if (window.matchMedia("(pointer:fine)").matches) {
      glowSection.addEventListener("mousemove", handleBlobMovement);
      glowSection.addEventListener("mouseout", handleBlobMouseOut);
    }

    function handleBlobMovement(e) {
      glowingCards.forEach((card) => {
        const blob = card.querySelector(".glow-section__blob");
        const cardRect = card.getBoundingClientRect();

        blob.style.opacity = "1";
        blob.style.transform = `translate(calc(${e.clientX - cardRect.left}px - 50%), calc(${e.clientY - cardRect.top}px - 50%))`;
      });
    }

    function handleBlobMouseOut() {
      glowingCards.forEach((card) => {
        const blob = card.querySelector(".glow-section__blob");
        blob.style.opacity = "0";
      });
    }

    // Optionally, return a cleanup function to remove listeners
    return () => {
      glowSection.removeEventListener("mousemove", handleBlobMovement);
      glowSection.removeEventListener("mouseout", handleBlobMouseOut);
    };
  }
