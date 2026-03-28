export function LifeStoriesSection({ onOpenLightbox }) {
  const lifeStories = [
    {
      title: "Early Education (1959-1969)",
      description:
        "At the age of five, he went to live with his Uncle Mr. Anaglah where he started his primary school at the Hlefi L/A Primary School in 1959. He passed his Hull exams with distinction in 1969.",
      image:
        "https://raw.createusercontent.com/97960ad7-2933-4375-8c2a-7d19cd4fed87/",
      year: "1959-1969",
    },
    {
      title: "Construction Apprentice (1970)",
      description:
        "Young, vibrant and hardworking Sammy applied as an apprentice to Kassadjan Construction Limited. He became a trainee on road construction projects in the Volta region.",
      image:
        "https://raw.createusercontent.com/2f531205-7985-450a-b232-26e48ba31df0/",
      year: "1970",
    },
    {
      title: "Entrepreneurial Journey (1970s-1980s)",
      description:
        "Sammy started his entrepreneurial journey with a cement supply company. He bought cement in tanks from GHACEM, packed them in bags and sold to customers. He later added block manufacturing.",
      image:
        "https://raw.createusercontent.com/63c7be10-1dbb-4ccb-a675-2fde5d98d4e2/",
      year: "1970s-1980s",
    },
    {
      title: "Samsam Construction Limited",
      description:
        "As his business expanded, he became a building contractor under the name Samsam Construction Limited. He executed many projects at the District level in the Volta Region and for corporate organizations.",
      image:
        "https://raw.createusercontent.com/ad500583-758b-4cd2-93b4-e9610086055e/",
      year: "1980s-2000s",
    },
    {
      title: "Church Leadership (1985)",
      description:
        "Samuel joined the Bible Believers Fellowship in 1985 and became a very committed Christian. He rose through the ranks to become a Deacon and Trustee, earning the nickname 'Engineer' for his work on church construction projects.",
      image:
        "https://raw.createusercontent.com/1a6b640b-b0f2-49d0-b45e-e5b005a554db/",
      year: "1985",
    },
    {
      title: "A House of Hospitality",
      description:
        "His house was like a transit quarters for many family members who came from the village to Accra and Tema. He hosted and refreshed many people with love and compassion.",
      image:
        "https://raw.createusercontent.com/a8187c84-5cf1-4d98-b866-567ace356bc1/",
      year: "Throughout Life",
    },
  ];

  return (
    <section
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
          marginBottom: "2rem",
          background: "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        Life Stories
      </h2>
      <p
        className="scroll-reveal"
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          color: "#666",
          marginBottom: "4rem",
          fontStyle: "italic",
        }}
      >
        Visual journey through the remarkable life of Samuel Yao Adeklo
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "40px",
          marginTop: "60px",
        }}
      >
        {lifeStories.map((story, idx) => (
          <div
            key={idx}
            className="scroll-reveal"
            style={{
              background: "white",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              border: "1px solid rgba(201, 169, 97, 0.1)",
              cursor: "pointer",
            }}
            onClick={() => onOpenLightbox(story.image)}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 20px 60px rgba(201, 169, 97, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 40px rgba(0, 0, 0, 0.1)";
            }}
          >
            <div
              style={{
                position: "relative",
                padding: "8px",
                background:
                  "repeating-linear-gradient(0deg, #FFD700 0px, #FFD700 4px, #DC143C 4px, #DC143C 8px, #228B22 8px, #228B22 12px, #000000 12px, #000000 16px), repeating-linear-gradient(90deg, #FFD700 0px, #FFD700 4px, #DC143C 4px, #DC143C 8px, #228B22 8px, #228B22 12px, #000000 12px, #000000 16px)",
                backgroundSize: "100% 8px, 8px 100%",
                backgroundPosition: "0 0, 0 0",
                backgroundRepeat: "repeat-x, repeat-y",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "300px",
                  overflow: "hidden",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    background:
                      "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  {story.year}
                </div>
              </div>
            </div>
            <div style={{ padding: "30px" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "15px",
                  background:
                    "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 700,
                }}
              >
                {story.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "#4A4A4A",
                  textAlign: "justify",
                }}
              >
                {story.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
