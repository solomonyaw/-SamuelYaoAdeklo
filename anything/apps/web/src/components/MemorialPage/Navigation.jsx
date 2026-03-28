"use client";

import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (typeof document !== "undefined") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const menuItems = [
    { label: "Home", id: "top" },
    { label: "Biography", id: "biography" },
    { label: "Life Stories", id: "life-stories" },
    { label: "Tributes", id: "tributes" },
    { label: "Legacy", id: "legacy" },
    { label: "Gallery", id: "gallery" },
    { label: "Hymns", id: "hymns" },
  ];

  return (
    <>
      {/* Kente Pattern Border at Top */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          zIndex: 1001,
          background:
            "repeating-linear-gradient(90deg, #FFD700 0px, #FFD700 20px, #DC143C 20px, #DC143C 40px, #228B22 40px, #228B22 60px, #000000 60px, #000000 80px, #FFA500 80px, #FFA500 100px)",
        }}
      />

      <nav
        style={{
          position: "fixed",
          top: "8px",
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isScrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
          transition: "all 0.4s ease",
          padding: "20px 0",
          borderBottom: "8px solid transparent",
          borderImage:
            "repeating-linear-gradient(90deg, #FFD700 0px, #FFD700 15px, #DC143C 15px, #DC143C 30px, #228B22 30px, #228B22 45px, #000000 45px, #000000 60px, #C9A961 60px, #C9A961 75px) 1",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo/Title */}
          <div
            onClick={() => scrollToSection("top")}
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              background: isScrolled
                ? "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)"
                : "linear-gradient(135deg, #FFD700 0%, #C9A961 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Samuel Yao Adeklo
          </div>

          {/* Desktop Menu */}
          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
            }}
            className="desktop-menu"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: isScrolled ? "#2C2C2C" : "white",
                  fontSize: "1rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  transition: "all 0.3s ease",
                  textShadow: isScrolled ? "none" : "0 2px 4px rgba(0,0,0,0.3)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = isScrolled
                    ? "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)"
                    : "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.color = isScrolled ? "white" : "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "none";
                  e.currentTarget.style.color = isScrolled
                    ? "#2C2C2C"
                    : "white";
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-button"
            style={{
              display: "none",
              background: isScrolled
                ? "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)"
                : "rgba(255, 255, 255, 0.2)",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              padding: "10px 15px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="mobile-menu"
            style={{
              display: "none",
              flexDirection: "column",
              background: "white",
              padding: "20px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              marginTop: "10px",
              borderRadius: "12px",
              maxWidth: "1400px",
              margin: "10px auto",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#2C2C2C",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  padding: "15px",
                  textAlign: "left",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "none";
                  e.currentTarget.style.color = "#2C2C2C";
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        <style jsx global>{`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            .mobile-menu-button {
              display: block !important;
            }
            .mobile-menu {
              display: flex !important;
            }
          }
        `}</style>
      </nav>
    </>
  );
}
