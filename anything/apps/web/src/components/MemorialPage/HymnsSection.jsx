export function HymnsSection() {
  return (
    <section
      id="hymns"
      style={{
        padding: "80px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: "var(--cream)",
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
        Hymns & Reflections
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

      {/* Audio Player */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto 40px auto",
          padding: "30px",
          background: "white",
          borderRadius: "16px",
          boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
          border: "4px solid transparent",
          borderImage:
            "repeating-linear-gradient(90deg, #FFD700 0px, #FFD700 15px, #DC143C 15px, #DC143C 30px, #228B22 30px, #228B22 45px, #000000 45px, #000000 60px) 1",
        }}
      >
        <div
          style={{
            fontSize: "1.3rem",
            color: "var(--gold)",
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: 600,
          }}
        >
          🎵 Will Your Anchor Hold
        </div>
        <audio
          controls
          style={{
            width: "100%",
            height: "50px",
            borderRadius: "25px",
            outline: "none",
          }}
        >
          <source
            src="https://files.cvaultx.com/wp-content/uploads/music/2022/07/Christian_Hymn_-_Will_Your_Anchor_Hold_In_The_Storm_Of_Light_We_Have_An_Anchor_CeeNaija.com_.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#666",
            marginTop: "15px",
            fontStyle: "italic",
          }}
        >
          A hymn of faith and steadfastness
        </p>
      </div>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "var(--white)",
          padding: "50px",
          borderRadius: "10px",
          boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            fontSize: "2rem",
            color: "var(--gold)",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Will Your Anchor Hold
        </div>

        <div
          style={{
            marginBottom: "25px",
            lineHeight: 1.9,
            fontSize: "1.1rem",
          }}
        >
          WILL your anchor hold in the storms of life,
          <br />
          When the clouds unfold their wings of strife?
          <br />
          When the strong tides lift, and the cable strain,
          <br />
          Will your anchor shift, or firm remain?
        </div>

        <div
          style={{
            fontStyle: "italic",
            color: "var(--gold)",
            padding: "20px",
            background: "var(--light-gray)",
            borderRadius: "5px",
            margin: "25px 0",
          }}
        >
          <strong>CHORUS</strong>
          <br />
          We have an anchor that keeps the soul
          <br />
          Steadfast and sure while the billows roll,
          <br />
          Fasten'd to the Rock which cannot move
          <br />
          Grounded firm and deep in the Saviour's love
        </div>

        <div
          style={{
            marginBottom: "25px",
            lineHeight: 1.9,
            fontSize: "1.1rem",
          }}
        >
          It is safely moor'd, 'twill the storm withstand,
          <br />
          For 'tis well secured by the Saviour's hand;
          <br />
          And the cables, pass'd from His heart to mine,
          <br />
          Can defy the blast, thro' strength divine.
        </div>

        <div
          style={{
            marginBottom: "25px",
            lineHeight: 1.9,
            fontSize: "1.1rem",
          }}
        >
          It will firmly hold in the straits of fear,
          <br />
          When the breakers have told the reef is near;
          <br />
          Tho' the tempest rave, and the wild winds blow,
          <br />
          Not an angry wave shall our barque o'erflow.
        </div>

        <div
          style={{
            marginBottom: "25px",
            lineHeight: 1.9,
            fontSize: "1.1rem",
          }}
        >
          It will surely hold in the floods of death,
          <br />
          When the waters cold chill our latest breath;
          <br />
          On the rising tide it can never fail,
          <br />
          While our hopes abide within the veil!
        </div>

        <div
          style={{
            marginBottom: "25px",
            lineHeight: 1.9,
            fontSize: "1.1rem",
          }}
        >
          When our eyes behold, thro' the gathering night,
          <br />
          The city of gold, our harbour bright,
          <br />
          We shall anchor fast by the heav'nly shore,
          <br />
          With the storms all past for evermore
        </div>
      </div>
    </section>
  );
}
