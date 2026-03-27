export function PhotoGallery({ onOpenLightbox }) {
  const photos = [
    "https://ucarecdn.com/9255b514-d2cd-439e-b9f1-cecef747b42e/-/format/auto/",
    "https://ucarecdn.com/772b8a49-1451-4ae8-adad-8e8e3cdb9f00/-/format/auto/",
    "https://ucarecdn.com/fe3e11ca-e476-4450-b15f-c0b3a90c371f/-/format/auto/",
    "https://ucarecdn.com/4641ad8e-a9d7-4686-8ee5-52db1ac1a3c5/-/format/auto/",
    "https://ucarecdn.com/628503b7-5987-4bda-a775-3b0cc0ad9bc7/-/format/auto/",
    "https://ucarecdn.com/6b75ee84-a626-435d-b6d3-41cf7d6fa36a/-/format/auto/",
    "https://ucarecdn.com/b7f89550-2b8c-48df-b452-a4b60a555978/-/format/auto/",
    "https://ucarecdn.com/e3349e54-752a-40e7-98f3-f18d28078654/-/format/auto/",
    "https://ucarecdn.com/efc615d6-6cba-4fee-af33-b99f898419a5/-/format/auto/",
    "https://raw.githubusercontent.com/solomonyaw/-SamuelYaoAdeklo/main/solo.png",
  ];

  return (
    <section
      id="gallery"
      style={{
        padding: "120px 20px",
        maxWidth: "1400px",
        margin: "0 auto",
        background: "linear-gradient(135deg, #FFFFFF 0%, #FAF7F2 100%)",
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
        Cherished Memories
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          marginTop: "60px",
        }}
      >
        {photos.map((src, idx) => (
          <div
            key={idx}
            className="scroll-reveal"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "20px",
              cursor: "pointer",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              height: "400px",
              backgroundColor: "#f5f5f5",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              border: "1px solid rgba(201, 169, 97, 0.1)",
            }}
            onClick={() => onOpenLightbox(src)}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 20px 60px rgba(201, 169, 97, 0.2)";
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 40px rgba(0, 0, 0, 0.1)";
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.transform = "scale(1)";
            }}
          >
            <img
              src={src}
              alt={`Memory ${idx + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
