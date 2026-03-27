export function Ornament({ src, alt = "Decorative ornament" }) {
  return (
    <div style={{ textAlign: "center", margin: "40px 0" }}>
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: "400px", width: "100%", opacity: 0.6 }}
      />
    </div>
  );
}
