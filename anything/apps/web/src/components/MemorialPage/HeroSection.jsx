export function HeroSection({ onScrollToSection }) {
  return (
    <section
      style={{
        height: "100vh",
        background:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(https://raw.githubusercontent.com/solomonyaw/-SamuelYaoAdeklo/main/word_media_image4.png) center/cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "var(--white)",
        position: "relative",
        animation: "fadeIn 2s ease-in",
      }}
    >
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            fontSize: "1rem",
            fontWeight: 500,
            letterSpacing: "6px",
            marginBottom: "2rem",
            textTransform: "uppercase",
            animation: "slideDown 1s ease-out 0.3s forwards",
            opacity: 0,
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          In Loving Memory
        </div>
        <h1
          style={{
            fontSize: "clamp(3rem, 10vw, 6rem)",
            fontWeight: 700,
            marginBottom: "1.5rem",
            background: "linear-gradient(135deg, #FFD700 0%, #C9A961 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "scaleIn 1s ease-out 0.6s forwards",
            opacity: 0,
            letterSpacing: "-0.02em",
          }}
        >
          SAMUEL YAO ADEKLO
        </h1>
        <div
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            fontWeight: 300,
            marginBottom: "2rem",
            animation: "slideDown 1s ease-out 0.9s forwards",
            opacity: 0,
            letterSpacing: "4px",
          }}
        >
          1954 – 2023
        </div>
        <div
          style={{
            width: "100px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #C9A961, transparent)",
            margin: "0 auto 2rem",
            animation: "slideDown 1s ease-out 1.2s forwards",
            opacity: 0,
          }}
        ></div>
        <p
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            fontWeight: 300,
            fontStyle: "italic",
            animation: "fadeInUp 1s ease-out 1.5s forwards",
            opacity: 0,
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          A life of love, strength, faith, and unwavering legacy
        </p>
      </div>
      <div
        onClick={() => onScrollToSection("biography")}
        style={{
          position: "absolute",
          bottom: "40px",
          fontSize: "2.5rem",
          animation: "bounce 2s infinite",
          cursor: "pointer",
          zIndex: 2,
          opacity: 0.8,
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "0.8")}
      >
        ↓
      </div>
    </section>
  );
}
