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
    <section style={{ padding: "60px 40px", background: "white" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "25px" }}>Xizmatlarimiz</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {services.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#111",
              color: "white",
              padding: "25px",
              borderRadius: "14px",
              fontSize: "18px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;