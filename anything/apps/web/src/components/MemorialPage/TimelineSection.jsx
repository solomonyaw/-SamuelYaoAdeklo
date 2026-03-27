export function TimelineSection() {
  const timelineEvents = [
    {
      year: "1954",
      title: "Birth",
      desc: "Samuel Yao Adeklo was born",
    },
    {
      year: "1983",
      title: "Marriage",
      desc: "United with Elizabeth Mansa Adeklo, beginning a 40-year journey together",
    },
    {
      year: "1990s-2000s",
      title: "Family & Career",
      desc: "Built a loving family while dedicating himself to his work in construction",
    },
    {
      year: "2013",
      title: "Health Challenges",
      desc: "Began battling health issues with unwavering faith and family support",
    },
    {
      year: "2023",
      title: "Home Going",
      desc: "Peacefully passed away on February 10, 2023 at 3:00 AM, aged 69",
    },
  ];

  return (
    <section
      id="timeline"
      style={{
        padding: "80px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
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
        Life Timeline
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
      <div
        style={{
          position: "relative",
          maxWidth: "1000px",
          margin: "50px auto",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "3px",
            height: "100%",
            background: "var(--gold)",
          }}
        ></div>

        {timelineEvents.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "50px",
              position: "relative",
              flexDirection: window.innerWidth > 768 ? "row" : "column",
              textAlign:
                window.innerWidth > 768
                  ? idx % 2 === 0
                    ? "right"
                    : "left"
                  : "left",
              paddingLeft: window.innerWidth > 768 ? 0 : "60px",
            }}
          >
            <div
              style={{
                flex: 1,
                paddingRight:
                  window.innerWidth > 768 && idx % 2 === 0 ? "50px" : 0,
                paddingLeft:
                  window.innerWidth > 768 && idx % 2 === 1 ? "50px" : 0,
                order: window.innerWidth > 768 && idx % 2 === 1 ? 2 : 1,
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <div
              style={{
                background: "var(--gold)",
                color: "var(--white)",
                padding: "10px 20px",
                borderRadius: "50px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                position: "relative",
                zIndex: 2,
                order: window.innerWidth > 768 ? (idx % 2 === 0 ? 2 : 1) : 1,
                marginBottom: window.innerWidth > 768 ? 0 : "10px",
              }}
            >
              {item.year}
            </div>
            <div
              style={{
                position: "absolute",
                left: window.innerWidth > 768 ? "50%" : "30px",
                transform: "translateX(-50%)",
                width: "20px",
                height: "20px",
                background: "var(--gold)",
                borderRadius: "50%",
                border: "4px solid var(--white)",
                zIndex: 3,
              }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
