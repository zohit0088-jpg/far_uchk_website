function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <p style={styles.tag}>ISHONCHLI QURILISH TASHKILOTI</p>

        <h1 style={styles.title}>
          FAR UCHK BINOKOR ELIT MCHJ
        </h1>

        <p style={styles.desc}>
          Ishonchli qurilish, mustahkam sifat va zamonaviy yondashuv asosida
          professional xizmat ko‘rsatamiz. Har bir loyihada aniqlik,
          mas’uliyat va natija bizning asosiy tamoyilimizdir.
        </p>

        <div style={styles.btnWrap}>
          <a href="#contact" style={styles.primaryBtn}>
            Bog‘lanish
          </a>

          <a href="#projects" style={styles.secondaryBtn}>
            Loyihalarni ko‘rish
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(0,0,0,0.88), rgba(0,0,0,0.55))",
  },
  content: {
    position: "relative",
    padding: "120px 40px",
    maxWidth: "900px",
  },
  tag: {
    color: "#facc15",
    fontSize: "14px",
    letterSpacing: "2px",
    marginBottom: "18px",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "64px",
    lineHeight: "1.15",
    color: "white",
    marginBottom: "22px",
  },
  desc: {
    fontSize: "20px",
    lineHeight: "1.8",
    color: "#dddddd",
    maxWidth: "760px",
    marginBottom: "30px",
  },
  btnWrap: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    background: "#facc15",
    color: "#111111",
    padding: "14px 28px",
    borderRadius: "10px",
    fontWeight: "bold",
  },
  secondaryBtn: {
    border: "1px solid #555555",
    color: "white",
    padding: "14px 28px",
    borderRadius: "10px",
    fontWeight: "bold",
  },
};

export default Hero;