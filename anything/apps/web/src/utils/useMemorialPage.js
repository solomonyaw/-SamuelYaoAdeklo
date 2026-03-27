import { useState, useEffect } from "react";

export function useMemorialPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [candles, setCandles] = useState([]);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const lightCandle = () => {
    setCandles((prev) => [...prev, { id: Date.now() }]);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll reveal effect
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll(".scroll-reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealElements);
    revealElements(); // Initial check

    return () => window.removeEventListener("scroll", revealElements);
  }, []);

  return {
    lightboxOpen,
    lightboxImage,
    candles,
    openLightbox,
    closeLightbox,
    lightCandle,
    scrollToSection,
  };
}
