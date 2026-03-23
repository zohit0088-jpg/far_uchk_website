function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2026 FAR UCHK BINOKOR ELIT MCHJ</p>
      <p style={styles.sub}>Barcha huquqlar himoyalangan</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "32px 20px",
    background: "#050505",
    color: "#aaaaaa",
    textAlign: "center",
    borderTop: "1px solid #222222",
  },
  text: {
    fontSize: "16px",
    marginBottom: "6px",
  },
  sub: {
    fontSize: "14px",
  },
};

export default Footer;