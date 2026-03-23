function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <p style={styles.tag}>BIZ HAQIMIZDA</p>

        <h2 style={styles.title}>
          Qurilishda ishonch, sifat va mas’uliyat
        </h2>

        <p style={styles.text}>
          FAR UCHK BINOKOR ELIT MCHJ — zamonaviy qurilish yechimlarini taklif
          etuvchi, sifat va ishonchlilikni ustuvor biladigan tashkilot.
          Biz turar joy, noturar joy obyektlari, ta’mirlash, rekonstruksiya va
          kompleks qurilish yo‘nalishlarida professional xizmat ko‘rsatamiz.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 40px",
    background: "#111111",
  },
  container: {
    maxWidth: "1000px",
  },
  tag: {
    color: "#facc15",
    fontSize: "14px",
    textTransform: "uppercase",
    marginBottom: "14px",
  },
  title: {
    fontSize: "42px",
    color: "white",
    marginBottom: "22px",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.9",
    color: "#d0d0d0",
    maxWidth: "900px",
  },
};

export default About;