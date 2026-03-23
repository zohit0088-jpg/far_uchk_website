function Projects() {
  const projects = [
    {
      title: "Ko‘p qavatli uy loyihasi",
      desc: "Zamonaviy turar joy loyihalari va mustahkam qurilish yechimlari asosida bajarilgan namunaviy obyekt.",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Tijoriy obyekt qurilishi",
      desc: "Savdo va xizmat ko‘rsatish obyektlari uchun professional va zamonaviy yondashuv.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Rekonstruksiya ishlari",
      desc: "Mavjud binolarni zamonaviy standartlarga mos ravishda yangilash va takomillashtirish.",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <p style={styles.tag}>LOYIHALAR</p>
      <h2 style={styles.title}>Namuna loyihalarimiz</h2>

      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={i}
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
            <img src={p.image} alt={p.title} style={styles.img} />
            <div style={styles.content}>
              <h3 style={styles.name}>{p.title}</h3>
              <p style={styles.desc}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 40px",
    background: "#111111",
  },
  tag: {
    color: "#facc15",
    marginBottom: "10px",
    fontSize: "14px",
    textTransform: "uppercase",
  },
  title: {
    color: "white",
    fontSize: "42px",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "22px",
  },
  card: {
    background: "#181818",
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid #2a2a2a",
    transition: "0.3s",
  },
  img: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    display: "block",
  },
  content: {
    padding: "22px",
  },
  name: {
    color: "white",
    fontSize: "22px",
    marginBottom: "12px",
  },
  desc: {
    color: "#bdbdbd",
    lineHeight: "1.8",
    fontSize: "16px",
  },
};

export default Projects;