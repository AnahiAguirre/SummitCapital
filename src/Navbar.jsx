import { useState, useEffect } from "react";

const MENU_COPY = {
  es: {
    items: [
      { text: "Inicio", href: "#inicio" },
      { text: "Nosotros", href: "#nosotros" },
      { text: "Servicios", href: "#servicios" },
      { text: "Por qué un asesor", href: "#porque" },
      { text: "Contacto", href: "#contacto" },
    ],
  },
  en: {
    items: [
      { text: "Home", href: "#inicio" },
      { text: "About", href: "#nosotros" },
      { text: "Services", href: "#servicios" },
      { text: "Why an advisor", href: "#porque" },
      { text: "Contact", href: "#contacto" },
    ],
  },
};

export default function Navbar({ lang, onLanguageChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = MENU_COPY[lang].items;

  // Detectar scroll para agregar sombra al navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú mobile al hacer clic en un link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar-figma ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-figma-container">
        {/* Logo - Izquierda */}
        <div className="navbar-figma-logo">
          <a href="#inicio">
            <img src="/logo-summit.png" alt="Summit Capital" />
          </a>
        </div>

        {/* Menú - Centro (Desktop) */}
        <ul className="navbar-figma-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="navbar-figma-link">
                {item.text}
                <span className="navbar-figma-underline" />
              </a>
            </li>
          ))}
        </ul>

        {/* Selector de idioma - Derecha (Desktop) */}
        <div className="navbar-figma-lang">
          <button
            onClick={() => onLanguageChange("es")}
            className={`navbar-figma-lang-btn ${lang === "es" ? "active" : ""}`}
          >
            ES
          </button>
          <div className="navbar-figma-lang-divider" />
          <button
            onClick={() => onLanguageChange("en")}
            className={`navbar-figma-lang-btn ${lang === "en" ? "active" : ""}`}
          >
            EN
          </button>
        </div>

        {/* Botón hamburguesa - Mobile */}
        <button
          className="navbar-figma-hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={isMobileMenuOpen ? "open" : ""} />
          <span className={isMobileMenuOpen ? "open" : ""} />
          <span className={isMobileMenuOpen ? "open" : ""} />
        </button>
      </div>

      {/* Menú Mobile */}
      <div className={`navbar-figma-mobile ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={handleLinkClick}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Idioma en mobile */}
        <div className="navbar-figma-mobile-lang">
          <button
            onClick={() => {
              onLanguageChange("es");
              setIsMobileMenuOpen(false);
            }}
            className={lang === "es" ? "active" : ""}
          >
            ES
          </button>
          <span>|</span>
          <button
            onClick={() => {
              onLanguageChange("en");
              setIsMobileMenuOpen(false);
            }}
            className={lang === "en" ? "active" : ""}
          >
            EN
          </button>
        </div>
      </div>

      {/* Overlay para cerrar el menú mobile */}
      {isMobileMenuOpen && (
        <div
          className="navbar-figma-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}