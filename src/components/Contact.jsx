function Contact() {
  return (
    <section style={{ padding: "60px 40px", background: "#f5f5f5" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "25px" }}>Bog‘lanish</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}
      >
        <div>
          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            <strong>Telefon:</strong> +998 XX XXX XX XX
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            <strong>Telegram:</strong> @username
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            <strong>Instagram:</strong> @far_uchk_binokor_elit
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            <strong>Manzil:</strong> Farg‘ona viloyati, O‘zbekiston
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "14px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <input
            type="text"
            placeholder="Ismingiz"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <input
            type="text"
            placeholder="Telefon raqamingiz"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <textarea
            placeholder="Xabaringiz"
            rows="5"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              fontSize: "16px",
              boxSizing: "border-box",
              resize: "none",
            }}
          />

          <button
            style={{
              padding: "14px 28px",
              background: "#111",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Yuborish
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;