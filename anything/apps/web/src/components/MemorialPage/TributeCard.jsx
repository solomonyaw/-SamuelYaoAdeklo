export function TributeCard({
  title,
  author,
  quote,
  content,
  image,
  portfolioLink,
  youtubeLink,
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
          <div
            style={{
              padding: "5px",
              background:
                "repeating-linear-gradient(0deg, #FFD700 0px, #FFD700 3px, #DC143C 3px, #DC143C 6px, #228B22 6px, #228B22 9px, #000000 9px, #000000 12px), repeating-linear-gradient(90deg, #FFD700 0px, #FFD700 3px, #DC143C 3px, #DC143C 6px, #228B22 6px, #228B22 9px, #000000 9px, #000000 12px)",
              backgroundSize: "100% 5px, 5px 100%",
              backgroundPosition: "0 0, 0 0",
              backgroundRepeat: "repeat-x, repeat-y",
              borderRadius: "50%",
            }}
          >
            <img
              src={image}
              alt={author}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            />
          </div>
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
              marginBottom: portfolioLink || youtubeLink ? "0.5rem" : 0,
            }}
          >
            {author}
          </div>
          {(portfolioLink || youtubeLink) && (
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {portfolioLink && (
                <a
                  href={portfolioLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background:
                      "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)",
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
              {youtubeLink && (
                <a
                  href={youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background:
                      "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)",
                    color: "white",
                    padding: "8px 20px",
                    borderRadius: "20px",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(255, 0, 0, 0.3)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 16px rgba(255, 0, 0, 0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(255, 0, 0, 0.3)";
                  }}
                >
                  ▶️ YouTube Channel
                </a>
              )}
            </div>
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
