function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <p style={styles.tag}>BOG‘LANISH</p>
      <h2 style={styles.title}>Biz bilan aloqa qiling</h2>

      <div style={styles.wrap}>
        <div style={styles.infoCard}>
          <p style={styles.line}>
            <strong>📞 Telefon:</strong><br />
            <a href="tel:+998501005555" style={styles.link}>+998 50 100 55 55</a><br />
            <a href="tel:+998997644206" style={styles.link}>+998 99 764 42 06</a><br />
            <a href="tel:+998994978485" style={styles.link}>+998 99 497 84 85</a>
          </p>

          <p style={styles.line}>
            <strong>📲 Telegram:</strong><br />
            <a
              href="https://t.me/MAGNORA1"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              @MAGNORA1
            </a>
          </p>

          <p style={styles.line}>
            <strong>📸 Instagram:</strong><br />
            <a
              href="https://instagram.com/Magnora5555"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              @Magnora5555
            </a><br />
            <a
              href="https://instagram.com/usta_aks"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              @usta_aks
            </a>
          </p>

          <p style={styles.line}>
            <strong>📧 Email:</strong><br />
            <a href="mailto:fube.faruchk@gmail.com" style={styles.link}>
              fube.faruchk@gmail.com
            </a>
          </p>

          <p style={styles.line}>
            <strong>📍 Manzil:</strong><br />
            Farg‘ona viloyati, Uchko‘prik tumani, Miltiqchi
          </p>
        </div>

        <div style={styles.formCard}>
          <input type="text" placeholder="Ismingiz" style={styles.input} />
          <input type="text" placeholder="Telefon raqamingiz" style={styles.input} />
          <textarea placeholder="Xabaringiz" style={styles.textarea}></textarea>
          <button style={styles.btn}>Yuborish</button>
        </div>
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
    fontSize: "40px",
    marginBottom: "30px",
  },
  wrap: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
  },
  infoCard: {
    background: "#181818",
    border: "1px solid #2a2a2a",
    borderRadius: "16px",
    padding: "24px",
    color: "#dddddd",
    lineHeight: "2",
  },
  formCard: {
    background: "#181818",
    border: "1px solid #2a2a2a",
    borderRadius: "16px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  line: {
    marginBottom: "14px",
  },
  link: {
    color: "#facc15",
  },
  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #333333",
    background: "#101010",
    color: "white",
    outline: "none",
  },
  textarea: {
    padding: "14px",
    height: "120px",
    borderRadius: "10px",
    border: "1px solid #333333",
    background: "#101010",
    color: "white",
    outline: "none",
    resize: "none",
  },
  btn: {
    background: "#facc15",
    border: "none",
    padding: "14px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#111111",
  },
};

export default Contact;