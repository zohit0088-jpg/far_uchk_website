function Hero() {
  return (
    <section
      style={{
        padding: "120px 40px",
        background: "linear-gradient(135deg, #000, #1a1a1a)",
      }}
    >
      <h1 style={{ fontSize: "52px", color: "#facc15" }}>
        FAR UCHK BINOKOR ELIT MCHJ
      </h1>

      <p style={{ fontSize: "20px", marginTop: "20px", maxWidth: "700px" }}>
        Ishonchli qurilish. Mustahkam sifat. Zamonaviy yondashuv.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "14px 30px",
          background: "#facc15",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Bog‘lanish
      </button>
    </section>
  );
}

export default Hero;