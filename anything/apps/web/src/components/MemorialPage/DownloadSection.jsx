export function DownloadSection() {
  return (
    <section
      style={{
        padding: "80px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
        background: "linear-gradient(135deg, #FAF7F2 0%, #FFFFFF 100%)",
      }}
    >
      <h2
        className="scroll-reveal"
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          marginBottom: "2rem",
          background: "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        Funeral Book
      </h2>
      <p
        className="scroll-reveal"
        style={{
          fontSize: "1.2rem",
          color: "#666",
          marginBottom: "3rem",
          maxWidth: "700px",
          margin: "0 auto 3rem",
        }}
      >
        Download the complete funeral book to keep as a cherished memory
      </p>
      <a
        href="https://raw.githubusercontent.com/solomonyaw/-SamuelYaoAdeklo/main/Mr.%20Samuel%20Yao%20Adeklo%20Funeral%20Book.pdf"
        download="Samuel_Yao_Adeklo_Funeral_Book.pdf"
        className="scroll-reveal"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          background: "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)",
          color: "white",
          padding: "20px 40px",
          borderRadius: "50px",
          textDecoration: "none",
          fontSize: "1.2rem",
          fontWeight: 700,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "0 10px 30px rgba(201, 169, 97, 0.3)",
          border: "none",
          cursor: "pointer",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
          e.currentTarget.style.boxShadow =
            "0 15px 40px rgba(201, 169, 97, 0.4)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow =
            "0 10px 30px rgba(201, 169, 97, 0.3)";
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download Funeral Book (PDF)
      </a>
      <div
        className="scroll-reveal"
        style={{
          marginTop: "2rem",
          fontSize: "0.95rem",
          color: "#999",
          fontStyle: "italic",
        }}
      >
        Click to download the complete memorial book
      </div>
    </section>
  );
}
