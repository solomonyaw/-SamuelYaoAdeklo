export function LifeJourneySection({ onOpenLightbox }) {
  const journeyItems = [
    {
      title: "Early Life & Education",
      description:
        "Born March 18, 1954, to the Late John Tutu Adeklo and Ruth Ehah. Raised in Hlefi, he passed his Hull exams with distinction in 1969, showing early promise of greatness.",
      image:
        "https://ucarecdn.com/772b8a49-1451-4ae8-adad-8e8e3cdb9f00/-/format/auto/",
      alt: "Young Samuel",
      reverse: false,
    },
    {
      title: "Marriage & Family",
      description:
        "In 1983, Samuel united with Elizabeth Mansa Adeklo. Together for 40 years, they built a loving home filled with faith, laughter, and three wonderful children.",
      image:
        "https://ucarecdn.com/fe3e11ca-e476-4450-b15f-c0b3a90c371f/-/format/auto/",
      alt: "Samuel and Elizabeth",
      reverse: true,
    },
    {
      title: "Entrepreneurial Journey",
      description:
        "From apprentice at Kassadjan Construction to founder of Samsam Construction Limited. A cement supplier, block manufacturer, and respected building contractor.",
      image:
        "https://ucarecdn.com/6b75ee84-a626-435d-b6d3-41cf7d6fa36a/-/format/auto/",
      alt: "Samuel professional",
      reverse: false,
    },
  ];

  return (
    <section
      style={{ padding: "120px 20px", maxWidth: "1400px", margin: "0 auto" }}
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
        His Life Journey
      </h2>

      {journeyItems.map((item, index) => (
        <div
          key={index}
          className="scroll-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
            gap: "60px",
            marginBottom: "100px",
            alignItems: "center",
            direction: window.innerWidth > 768 && item.reverse ? "rtl" : "ltr",
          }}
        >
          <div style={{ direction: "ltr" }}>
            <h3
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                background: "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "1.5rem",
                fontWeight: 700,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.9,
                color: "#4A4A4A",
                textAlign: "justify",
              }}
            >
              {item.description}
            </p>
          </div>
          <div
            style={{
              width: "100%",
              padding: "8px",
              background:
                "repeating-linear-gradient(0deg, #FFD700 0px, #FFD700 4px, #DC143C 4px, #DC143C 8px, #228B22 8px, #228B22 12px, #000000 12px, #000000 16px), repeating-linear-gradient(90deg, #FFD700 0px, #FFD700 4px, #DC143C 4px, #DC143C 8px, #228B22 8px, #228B22 12px, #000000 12px, #000000 16px)",
              backgroundSize: "100% 8px, 8px 100%",
              backgroundPosition: "0 0, 0 0",
              backgroundRepeat: "repeat-x, repeat-y",
              borderRadius: "28px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
              direction: "ltr",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "450px",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onClick={() => onOpenLightbox(item.image)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(0.98)";
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <img
                src={item.image}
                alt={item.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
