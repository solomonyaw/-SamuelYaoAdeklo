export function BiographySection() {
  return (
    <section
      id="biography"
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
        His Story
      </h2>

      <div
        className="scroll-reveal"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            typeof window !== "undefined" && window.innerWidth > 768
              ? "400px 1fr"
              : "1fr",
          gap: "50px",
          alignItems: "start",
        }}
      >
        {/* Image Column */}
        <div
          style={{
            position:
              typeof window !== "undefined" && window.innerWidth > 768
                ? "sticky"
                : "relative",
            top: "100px",
            background: "white",
            padding: "20px",
            borderRadius: "24px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
            border: "2px solid rgba(201, 169, 97, 0.2)",
          }}
        >
          <img
            src="https://raw.githubusercontent.com/solomonyaw/-SamuelYaoAdeklo/main/word_media_image4.png"
            alt="Samuel Yao Adeklo Portrait"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              objectFit: "contain",
            }}
          />
          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
              padding: "15px",
              background:
                "linear-gradient(135deg, rgba(201, 169, 97, 0.1) 0%, rgba(184, 148, 31, 0.05) 100%)",
              borderRadius: "12px",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--gold)",
              }}
            >
              Samuel Yao Adeklo
            </p>
            <p style={{ fontSize: "0.95rem", color: "#666", marginTop: "5px" }}>
              March 18, 1954 – February 10, 2023
            </p>
          </div>
        </div>

        {/* Biography Text Column */}
        <div
          style={{
            fontSize: "1.15rem",
            lineHeight: 2,
            background: "white",
            padding: "60px",
            borderRadius: "24px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
            border: "1px solid rgba(201, 169, 97, 0.1)",
          }}
        >
          <div
            style={{
              fontSize: "4rem",
              float: "left",
              lineHeight: 1,
              marginRight: "15px",
              marginTop: "-10px",
              background: "linear-gradient(135deg, #C9A961 0%, #B8941F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 700,
            }}
          >
            S
          </div>

          <p style={{ marginBottom: "1.8rem", textAlign: "justify" }}>
            amuel Yao Adeklo was born on Thursday, March 18, 1954, to the Late
            John Tutu Adeklo who was the first Presbyter of the E.P. Church of
            Hlefi and Ruth Ehah, an industrious lady from Todome, in the Volta
            region. Samuel Yao Adeklo, popularly known by his friends and family
            as Efo Sammy was the fourth of seven siblings.
          </p>

          <p style={{ marginBottom: "1.8rem", textAlign: "justify" }}>
            At the age of five, he went to live with his Uncle Mr. Anaglah of
            blessed memory where he started his primary school at the Hlefi L/A
            Primary School in 1959. He completed primary 6 in 1965 after which
            he continued his education from Form 1 to Form 4. He completed Form
            4 in 1969 where he took his final exams, which was then known as
            Hull exams. He passed his Hull exams with distinction.
          </p>

          <p style={{ marginBottom: "1.8rem", textAlign: "justify" }}>
            A year after in 1970, young, vibrant and hardworking Sammy applied
            as an apprentice to a road construction company known as Kassadjan
            Construction Limited. Kasadjan was constructing a number of roads in
            the Volta region at the time and his application was accepted and he
            became a trainee on the road construction project.
          </p>

          <p style={{ marginBottom: "1.8rem", textAlign: "justify" }}>
            Sammy was a very dedicated, hardworking and trusted person, so upon
            completion of the road project in the Volta region, his company
            asked him to join their project team in Tema. After working for some
            time and gaining mastery, Sammy started his entrepreneurial journey.
            He started his own cement supply company and became a cement
            supplier to various companies and individuals. He usually bought the
            cement in tanks from GHACEM, packed them in cement paper bags and
            sold to his customers. He later added the manufacturing of blocks at
            the Community 9 and Community 11 stations in Tema.
          </p>

          <p style={{ marginBottom: "1.8rem", textAlign: "justify" }}>
            As his business expanded, he added sand and stone supply and later
            became a building contractor under the name, Samsam Construction
            Limited. He executed many projects at the District level in the
            Volta Region and expertly executed all his projects. He also did
            some projects for corporate organizations and individuals in Tema
            and Accra.
          </p>

          <p style={{ marginBottom: "1.8rem", textAlign: "justify" }}>
            Samuel Yao Adeklo joined the Bible Believers Fellowship in 1985 and
            became a very committed Christian. He was very dedicated to his
            Church and rose through the ranks to became a Deacon and was later
            appointed as a Trustee for the Adjei-Kojo branch of the church.
          </p>

          <p style={{ marginBottom: "1.8rem", textAlign: "justify" }}>
            Due to Sammy's background in construction, he was very active and
            instrumental in the church's projects which included the
            construction of the Adjei-Kojo Auditorium and the Tema Auditorium of
            the Church. As a result of his zeal towards church projects, his
            friends in church usually called him Engineer. In 2013, Sammy
            suffered a mild stroke which later became full blown stroke. He
            still held strong his faith in God and endured pain for a very long
            time till his last breath.
          </p>

          <p style={{ marginBottom: "1.8rem", textAlign: "justify" }}>
            Samuel Yao Adeklo was a principled Christian who loved the Lord
            Jesus Christ. He had was a very loving man and helped many people to
            find their feet in life. His house was like a transit quarters for
            many family members who came from the village to Accra and Tema. He
            hosted and refreshed many people, and we are confident that he is
            resting peacefully in the bosom of his Maker. He is survived by a
            wife, three children, five grandchildren, and several family members
            and friends.
          </p>

          <div
            style={{
              marginTop: "3rem",
              padding: "30px",
              background:
                "linear-gradient(135deg, rgba(201, 169, 97, 0.1) 0%, rgba(184, 148, 31, 0.05) 100%)",
              borderRadius: "16px",
              borderLeft: "4px solid var(--gold)",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                marginBottom: "0.5rem",
                fontWeight: 600,
              }}
            >
              Philippians 1:21,
            </p>
            <p style={{ fontSize: "1.3rem", color: "var(--gold)" }}>
              For to me, to live is Christ, and to die is gain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
