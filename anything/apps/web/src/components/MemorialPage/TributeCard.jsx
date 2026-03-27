export function TributeCard({
  title,
  author,
  quote,
  content,
  image,
  portfolioLink,
}) {
  return (
    <div
      style={{
        background: "var(--white)",
        padding: "40px",
        marginBottom: "40px",
        borderRadius: "10px",
        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
        borderLeft: "5px solid var(--gold)",
        transition: "transform 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "2rem",
        }}
      >
        {image && (
          <img
            src={image}
            alt={author}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid var(--gold)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }}
          />
        )}
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontSize: "1.8rem",
              color: "var(--gold)",
              marginBottom: "0.5rem",
            }}
          >
            {title}
          </h3>
          <div
            style={{
              fontStyle: "italic",
              color: "#666",
              fontSize: "1.1rem",
              marginBottom: portfolioLink ? "0.5rem" : 0,
            }}
          >
            {author}
          </div>
          {portfolioLink && (
            <a
              href={portfolioLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)",
                color: "white",
                padding: "8px 20px",
                borderRadius: "20px",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 600,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(201, 169, 97, 0.3)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 16px rgba(201, 169, 97, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(201, 169, 97, 0.3)";
              }}
            >
              🌐 Visit Portfolio
            </a>
          )}
        </div>
      </div>

      {quote && (
        <div
          style={{
            fontStyle: "italic",
            color: "var(--gold)",
            fontSize: "1.1rem",
            padding: "20px",
            borderLeft: "4px solid var(--gold)",
            background: "var(--light-gray)",
            margin: "20px 0",
          }}
        >
          {quote}
        </div>
      )}

      <div style={{ textAlign: "justify" }}>{content}</div>
    </div>
  );
}
