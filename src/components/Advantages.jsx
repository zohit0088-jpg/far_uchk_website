function Advantages() {
  const list = [
    "Yuqori sifat",
    "Tajriba va ishonch",
    "Zamonaviy texnologiyalar",
    "Aniq muddatlar",
    "Mas’uliyatli yondashuv",
    "Ishonchli hamkorlik",
  ];

  return (
    <section style={styles.section}>
      <p style={styles.tag}>USTUNLIKLARIMIZ</p>
      <h2 style={styles.title}>Nega aynan biz?</h2>

      <div style={styles.grid}>
        {list.map((item, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
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
    marginBottom: "10px",
    fontSize: "14px",
    textTransform: "uppercase",
  },
  title: {
    color: "white",
    fontSize: "40px",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#151515",
    padding: "26px",
    borderRadius: "14px",
    color: "white",
    border: "1px solid #2a2a2a",
    textAlign: "center",
    transition: "0.3s",
    cursor: "pointer",
    fontSize: "18px",
  },
};

export default Advantages;