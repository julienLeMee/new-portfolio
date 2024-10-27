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
