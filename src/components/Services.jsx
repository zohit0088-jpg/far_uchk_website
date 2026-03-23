function Services() {
  const services = [
    "Turar joy qurilishi",
    "Noturar joy obyektlari qurilishi",
    "Ta’mirlash va rekonstruksiya",
    "Fasad ishlari",
    "Tom yopish ishlari",
    "Kompleks qurilish xizmati",
  ];

  return (
    <section id="services" style={styles.section}>
      <p style={styles.tag}>XIZMATLAR</p>

      <h2 style={styles.title}>Asosiy yo‘nalishlarimiz</h2>

      <div style={styles.grid}>
        {services.map((item, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.borderColor = "#facc15";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#2a2a2a";
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 40px",
    background: "#0b0b0b",
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
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#161616",
    border: "1px solid #2a2a2a",
    borderRadius: "16px",
    padding: "28px",
    color: "white",
    fontSize: "18px",
    lineHeight: "1.6",
    transition: "0.3s",
    cursor: "pointer",
  },
};

export default Services;