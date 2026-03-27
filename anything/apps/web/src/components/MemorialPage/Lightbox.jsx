export function Lightbox({ isOpen, imageSrc, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        zIndex: 1000,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "30px",
          right: "50px",
          fontSize: "40px",
          color: "var(--white)",
          cursor: "pointer",
        }}
      >
        &times;
      </span>
      <img
        src={imageSrc}
        alt="Enlarged"
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}
