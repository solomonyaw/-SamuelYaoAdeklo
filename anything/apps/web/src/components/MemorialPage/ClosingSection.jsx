export function ClosingSection() {
  return (
    <>
      {/* Kente Pattern Border at Top of Footer */}
      <div
        style={{
          height: "12px",
          background:
            "repeating-linear-gradient(90deg, #FFD700 0px, #FFD700 20px, #DC143C 20px, #DC143C 40px, #228B22 40px, #228B22 60px, #000000 60px, #000000 80px, #FFA500 80px, #FFA500 100px)",
        }}
      />

      <section
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://ucarecdn.com/7ddad7b5-5cb6-4707-9d1e-2732c21a434e/-/format/auto/) center/cover",
          color: "var(--white)",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <div
          style={{
            fontSize: "5rem",
            marginBottom: "30px",
            animation: "glow 2s infinite",
          }}
        >
          🕯️
        </div>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
            marginBottom: "20px",
            color: "var(--gold)",
          }}
        >
          Rest in Peace
        </h2>
        <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
          Gone but never forgotten
        </p>
        <p style={{ marginTop: "30px", fontSize: "1.2rem" }}>
          Until we meet again
        </p>
        <div style={{ marginTop: "40px" }}>
          <img
            src="https://ucarecdn.com/506fd978-7121-4a26-9e99-b243afcf4d26/-/format/auto/"
            alt="White lily"
            style={{ maxWidth: "300px", width: "100%", opacity: 0.9 }}
          />
        </div>
      </section>

      {/* Kente Pattern Border at Bottom of Footer */}
      <div
        style={{
          height: "12px",
          background:
            "repeating-linear-gradient(90deg, #C9A961 0px, #C9A961 20px, #228B22 20px, #228B22 40px, #DC143C 40px, #DC143C 60px, #FFD700 60px, #FFD700 80px, #000000 80px, #000000 100px)",
        }}
      />
    </>
  );
}
