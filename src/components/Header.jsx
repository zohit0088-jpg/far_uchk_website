function Header() {
  return (
    <header
      style={{
        padding: "20px 40px",
        background: "#0b0b0b",
        borderBottom: "1px solid #333",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "22px", fontWeight: "bold", color: "#facc15" }}>
        FAR UCHK BINOKOR ELIT
      </div>

      <nav style={{ display: "flex", gap: "25px" }}>
        <a href="#about" style={{ color: "white" }}>Biz haqimizda</a>
        <a href="#services" style={{ color: "white" }}>Xizmatlar</a>
        <a href="#projects" style={{ color: "white" }}>Loyihalar</a>
        <a href="#contact" style={{ color: "white" }}>Bog‘lanish</a>
      </nav>
    </header>
  );
}

export default Header;