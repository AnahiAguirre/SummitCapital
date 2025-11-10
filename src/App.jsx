// src/App.jsx
import { useEffect, useState } from "react";
import "./index.css";
import "./hero-figma.css";
import "./services-figma.css"; 
import Hero from "./Hero";
import Services from "./Services"; 

const COPY = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      why: "Por qué un asesor",
      contact: "Contacto",
    },
    about: {
      title: "Summit Capital",
      subtitle: "Asesoramiento financiero",
      text1:
        "Nuestro trabajo como firma independiente comenzó a gestarse hace más de diez años, dedicándonos a la administración de carteras de inversión de individuos e instituciones.",
      text2:
        "Nos especializamos en reconocer los intereses de cada cliente para lograr una planificación acorde a sus necesidades y objetivos, con el fin de encontrar las mejores opciones de inversión y desarrollar estrategias a corto y largo plazo.",
      clientsTitle: "Clientes",
      clientsText:
        "Individuos, familias e instituciones confían en nuestro trabajo a la hora de gestionar sus carteras de inversión. Los acompañamos y asesoramos en cada etapa del proceso.",
    },
    why: {
      title: "¿Por qué un asesor financiero?",
      text1:
        "Nuestra labor principal es crear un perfil detallado de cada cliente, con el objetivo de idear una estrategia completamente personalizada, trabajando continuamente con el fin de lograr su correcta ejecución y monitoreo para alcanzar el éxito de la misma.",
      text2:
        "Al elegir trabajar con nosotros, usted ganará un socio estratégico para alcanzar un desarrollo financiero exitoso.",
    },
    contact: {
      title: "Contáctanos",
      nameLabel: "Nombre y Apellido",
      emailLabel: "Email",
      messageLabel: "Mensaje",
      submit: "ENVIAR MENSAJE",
      successMessage:
        "Gracias por tu mensaje. Pronto nos pondremos en contacto.",
    },
    footer: {
      rights: "© 2025 Summit Capital. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      why: "Why an advisor",
      contact: "Contact",
    },
    about: {
      title: "Summit Capital",
      subtitle: "Financial Advisory",
      text1:
        "Our independent firm began over ten years ago, dedicated to managing investment portfolios for individuals and institutions.",
      text2:
        "We specialize in identifying each client's goals to build investment plans aligned with their needs and objectives, developing both short and long-term strategies.",
      clientsTitle: "Clients",
      clientsText:
        "Individuals, families, and institutions trust us to manage their portfolios. We accompany and advise them at every stage of the process.",
    },
    why: {
      title: "Why a financial advisor?",
      text1:
        "Our main task is to create a detailed profile of each client, aiming to design a fully customized strategy, continuously working to ensure proper execution and monitoring to achieve success.",
      text2:
        "By choosing to work with us, you gain a strategic partner for achieving successful financial growth.",
    },
    contact: {
      title: "Contact Us",
      nameLabel: "Full Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submit: "SEND MESSAGE",
      successMessage:
        "Thank you for your message. We will contact you soon.",
    },
    footer: {
      rights: "© 2025 Summit Capital. All rights reserved.",
    },
  },
};

function App() {
  const [lang, setLang] = useState("es");
  const t = COPY[lang];

  // Animaciones reveal
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-top-right, .reveal-bottom-left"
    );
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-inview");
          else e.target.classList.remove("is-inview");
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="header-inner">
          <div className="logo">
            SUMMIT<span>CAPITAL</span>
          </div>
          <nav className="main-nav">
            <a href="#inicio">{t.nav.home}</a>
            <a href="#nosotros">{t.nav.about}</a>
            <a href="#servicios">{t.nav.services}</a>
            <a href="#porque">{t.nav.why}</a>
            <a href="#contacto">{t.nav.contact}</a>
          </nav>
          <div className="lang-switch">
            <button
              onClick={() => setLang("es")}
              className={lang === "es" ? "active" : ""}
            >
              ES
            </button>
            <span>|</span>
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "active" : ""}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <Hero lang={lang} />

      {/* NOSOTROS */}
      <section id="nosotros" className="section section-light">
        <div className="container about-clients-grid">
          <div className="reveal">
            <h2>{t.about.title}</h2>
            <h3>{t.about.subtitle}</h3>
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
          </div>
          <div>
            <img
              src="/persona-laptop.jpg"
              alt="Asesoramiento"
              className="reveal-top-right"
            />
          </div>
        </div>

        <div className="container about-clients-grid">
          <div>
            <img
              src="/cafe-reunion.jpg"
              alt="Reunión"
              className="reveal-bottom-left"
            />
          </div>
          <div className="reveal">
            <h3>{t.about.clientsTitle}</h3>
            <p>{t.about.clientsText}</p>
          </div>
        </div>
      </section>

      {/* SERVICIOS - NUEVO COMPONENTE */}
      <Services lang={lang} />

      {/* POR QUÉ UN ASESOR */}
      <section id="porque" className="section split-section">
        <div className="split-left reveal">
          <h2>{t.why.title}</h2>
        </div>
        <div className="split-right reveal">
          <p>{t.why.text1}</p>
          <p className="highlight">{t.why.text2}</p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section contact-section">
        <div className="contact-overlay" />
        <div className="contact-inner reveal">
          <h2>{t.contact.title}</h2>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(t.contact.successMessage);
            }}
          >
            <label>
              {t.contact.nameLabel}
              <input type="text" name="name" required />
            </label>
            <label>
              {t.contact.emailLabel}
              <input type="email" name="email" required />
            </label>
            <label>
              {t.contact.messageLabel}
              <textarea name="message" rows="4" required></textarea>
            </label>
            <button type="submit">{t.contact.submit}</button>
          </form>
        </div>
      </section>

      {/* BLOQUE AZUL CON MAIL */}
      <section className="contact-mail">
        <p>
          <a href="mailto:info@summitcapital.com">info@summitcapital.com</a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <p>{t.footer.rights}</p>
      </footer>
    </>
  );
}

export default App;