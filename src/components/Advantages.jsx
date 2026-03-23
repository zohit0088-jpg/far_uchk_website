function Advantages() {
  const items = [
    "Sifatli materiallar",
    "Tajribali jamoa",
    "Muddatga amal qilish",
    "Zamonaviy yondashuv",
    "Mas’uliyatli xizmat",
    "Ishonchli hamkorlik",
  ];

  return (
    <section style={{ padding: "60px 40px", background: "white" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "25px" }}>
        Nega aynan biz
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#111",
              color: "white",
              padding: "24px",
              borderRadius: "14px",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Advantages;