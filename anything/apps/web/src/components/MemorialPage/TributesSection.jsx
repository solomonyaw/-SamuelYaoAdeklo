import { TributeCard } from "./TributeCard";
import { WifeTribute } from "./tributes/WifeTribute";
import { GibsonTribute } from "./tributes/GibsonTribute";
import { SolomonTribute } from "./tributes/SolomonTribute";

export function TributesSection() {
  return (
    <section
      id="tributes"
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
        Tributes
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

      <TributeCard
        title="Tribute by Wife"
        author="Elizabeth Mansa Adeklo"
        image="https://raw.githubusercontent.com/solomonyaw/-SamuelYaoAdeklo/main/mom.jpg"
        quote="&quot;Naked I came from my mother's womb, and naked I will depart. The Lord gave, and the Lord has taken away; may the name of the Lord be praised.&quot; - Job 1:21"
        content={<WifeTribute />}
      />

      <TributeCard
        title="Tribute by Children"
        author="Gibson Michael Kumah"
        image="https://raw.githubusercontent.com/solomonyaw/-SamuelYaoAdeklo/main/gibson.jpeg"
        youtubeLink="https://www.youtube.com/@buildwithgibson5396"
        quote="&quot;And the King shall answer and say unto them, Verily I say unto you, In as much as ye have done it unto one of the least of these my brethren, ye have done it unto me.&quot; - Matthew 25:40"
        content={<GibsonTribute />}
      />

      <TributeCard
        title="Tribute by Son"
        author="Solomon Yaw Adeklo"
        image="https://raw.githubusercontent.com/solomonyaw/-SamuelYaoAdeklo/main/solo.png"
        portfolioLink="https://solomonyaw.github.io/"
        content={<SolomonTribute />}
      />
    </section>
  );
}
