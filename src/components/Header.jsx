function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoWrap}>
        <div style={styles.logoBox}>F</div>
        <div>
          <div style={styles.logoText}>FAR UCHK BINOKOR ELIT</div>
          <div style={styles.logoSub}>MCHJ</div>
        </div>
      </div>

      <nav style={styles.nav}>
        <a href="#about" style={styles.link}>Biz haqimizda</a>
        <a href="#services" style={styles.link}>Xizmatlar</a>
        <a href="#projects" style={styles.link}>Loyihalar</a>
        <a href="#contact" style={styles.link}>Bog‘lanish</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "rgba(10, 10, 10, 0.92)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid #242424",
    padding: "16px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logoBox: {
    width: "42px",
    height: "42px",
    borderRadius: "10px",
    background: "#facc15",
    color: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "20px",
  },
  logoText: {
    color: "#facc15",
    fontWeight: "bold",
    fontSize: "18px",
  },
  logoSub: {
    color: "#aaa",
    fontSize: "12px",
    marginTop: "2px",
  },
  nav: {
    display: "flex",
    gap: "24px",
    alignItems: "center",
    fontSize: "15px",
  },
  link: {
    color: "#fff",
  },
};

export default Header;