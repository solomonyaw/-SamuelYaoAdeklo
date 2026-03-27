export function LegacySection() {
  const legacyValues = [
    {
      icon: "💪",
      title: "Hard Work",
      text: "From apprentice to entrepreneur - never gave up on his dreams",
    },
    {
      icon: "❤️",
      title: "Love",
      text: "Unconditional love that transformed lives and built families",
    },
    {
      icon: "🤝",
      title: "Compassion",
      text: "His house was a transit quarters for family from the village",
    },
    {
      icon: "🙏",
      title: "Faith",
      text: "Deacon, Trustee, and instrumental in church construction projects",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family",
      text: "Devoted husband of 40 years, loving father, and friend to all",
    },
  ];

  return (
    <section
      id="legacy"
      style={{
        padding: "120px 20px",
        maxWidth: "1400px",
        margin: "0 auto",
        background: "linear-gradient(135deg, #FAF7F2 0%, #FFFFFF 100%)",
      }}
    >
      <h2
        className="scroll-reveal"
        style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          textAlign: "center",
          marginBottom: "4rem",
          background: "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        His Enduring Legacy
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          marginTop: "60px",
        }}
      >
        {legacyValues.map((value, idx) => (
          <div
            key={idx}
            className="scroll-reveal"
            style={{
              textAlign: "center",
              padding: "50px 30px",
              background: "white",
              borderRadius: "24px",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "default",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(201, 169, 97, 0.1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 20px 60px rgba(201, 169, 97, 0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "var(--soft-black)";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 10px 40px rgba(0, 0, 0, 0.08)";
            }}
          >
            <div style={{ fontSize: "4rem", marginBottom: "20px" }}>
              {value.icon}
            </div>
            <h4
              style={{
                fontSize: "1.6rem",
                marginBottom: "15px",
                fontWeight: 700,
              }}
            >
              {value.title}
            </h4>
            <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
