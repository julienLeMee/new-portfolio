export function initAnimations() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    try {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ajouter un délai avant d'appliquer les classes
            setTimeout(() => {
              entry.target.classList.remove("opacity-0");
              entry.target.classList.add("opacity-100"); // Assurez-vous d'ajouter cette classe pour rendre visible
              entry.target.style.transform = "translateY(0)"; // Animation de translation
            }, 200);
          } else {
            entry.target.classList.add("opacity-0"); // Rendre l'élément invisible
            entry.target.classList.remove("opacity-100"); // Assurez-vous de retirer cette classe pour rendre invisible
            entry.target.style.transform = "translateY(30px)"; // Réinitialiser l'animation
          }
        });
      }, options);

      const elements = [
        document.getElementById("selected-title"),
        document.getElementById("selected-subtitle"),
        document.getElementById("selected-description"),
      ].filter((element) => element !== null);

      if (elements.length === 0) {
        console.warn("Aucun élément trouvé pour l'observation.");
      } else {
        elements.forEach((element) => {
          observer.observe(element);
        });
      }
    } catch (error) {
      console.error("Erreur dans l'initialisation de l'IntersectionObserver:", error);
    }
  }

  initAnimations();


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

      // blob.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      // blob.style.transform = `translate(${e.clientX - cardRect.left}px, ${e.clientY - cardRect.top}px)`
      blob.style.transform = `translate(calc(${
        e.clientX - cardRect.left
      }px - 50%), calc(${e.clientY - cardRect.top}px - 50%))`;
    });
  }

  function handleBlobMouseOut(e) {
    glowingCards.forEach((card) => {
      const blob = card.querySelector(".glow-section__blob");
      blob.style.opacity = "0";
    });
  }
