export function InteractiveSection({ candles, onLightCandle }) {
  return (
    <section
      id="interactive"
      style={{
        padding: "80px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
        background: "var(--light-gray)",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          textAlign: "center",
          marginBottom: "3rem",
          color: "var(--gold)",
          fontWeight: 300,
        }}
      >
        Light a Candle
        <span
          style={{
            display: "block",
            width: "100px",
            height: "3px",
            background: "var(--gold)",
            margin: "20px auto",
          }}
        ></span>
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "700px",
          margin: "0 auto 30px",
        }}
      >
        In honor of Samuel's memory, light a virtual candle
      </p>
      <button
        onClick={onLightCandle}
        style={{
          background: "var(--gold)",
          color: "var(--white)",
          border: "none",
          padding: "20px 50px",
          fontSize: "1.3rem",
          borderRadius: "50px",
          cursor: "pointer",
          boxShadow: "0 5px 15px rgba(212, 175, 55, 0.3)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "#B8941F";
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow =
            "0 8px 20px rgba(212, 175, 55, 0.5)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "var(--gold)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 5px 15px rgba(212, 175, 55, 0.3)";
        }}
      >
        🕯️ Light a Candle
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "40px",
          minHeight: "100px",
        }}
      >
        {candles.map((candle) => (
          <div
            key={candle.id}
            style={{
              fontSize: "3rem",
              animation: "flicker 2s infinite",
            }}
          >
            🕯️
          </div>
        ))}
        {candles.length > 0 && (
          <p
            style={{
              width: "100%",
              textAlign: "center",
              fontStyle: "italic",
              color: "var(--gold)",
              marginTop: "20px",
            }}
          >
            Thank you for honoring his memory
          </p>
        )}
      </div>
    </section>
  );
}
