import { gsap } from "gsap";

export const heroAnimation = () => {
  const tl = gsap.timeline();

  // Animation pour le texte "[000. Where It All Starts]"
  tl.fromTo(
    ".hero-heading-small",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
  )
    // Animation pour le texte principal "Hi I'm Julien"
    .fromTo(
      ".hero-heading-large",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.3" // chevauchement pour démarrer légèrement plus tôt
    )
    // Animation pour le paragraphe "I learn and improve..."
    .fromTo(
      ".hero-paragraph",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    // Animation pour les boutons
    .fromTo(
      ".hero-buttons button",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.2, stagger: 0.1, ease: "back.out(1.7)" }
    );
};
