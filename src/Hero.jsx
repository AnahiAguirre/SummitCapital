import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// TEXTOS PARA CADA SLIDE
const HERO_COPY = {
  es: {
    slides: [
      {
        title: "Estrategia, claridad y crecimiento financiero.",
        subtitle: "Acompañamos tu camino hacia decisiones seguras y rentables.",
      },
      {
        title: "Gestión profesional de patrimonios.",
        subtitle: "Soluciones personalizadas para alcanzar tus objetivos financieros.",
      },
      {
        title: "Tu socio estratégico en inversiones.",
        subtitle: "Más de 10 años de experiencia en el mercado financiero.",
      },
    ],
  },
  en: {
    slides: [
      {
        title: "Strategy, clarity and financial growth.",
        subtitle: "We accompany your path to safe and profitable decisions.",
      },
      {
        title: "Professional wealth management.",
        subtitle: "Personalized solutions to achieve your financial goals.",
      },
      {
        title: "Your strategic partner in investments.",
        subtitle: "Over 10 years of experience in the financial market.",
      },
    ],
  },
};

// Generar partículas doradas aleatorias (estilo Figma)
const generateParticles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

export default function Hero({ lang }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [particles] = useState(() => generateParticles(30));
  const [showScroll, setShowScroll] = useState(true);

  const totalSlides = 3;
  const content = HERO_COPY[lang].slides[activeSlide];

  // Auto-cambio de slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(
      () => setActiveSlide((prev) => (prev + 1) % totalSlides),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  // Detectar si estamos dentro del hero y mostrar/ocultar flecha
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("inicio");
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      // Mostrar flecha solo si el hero está visible en pantalla
      setShowScroll(heroRect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="inicio" className="hero-figma">
      {/* Background Image */}
      <div className="hero-figma-bg">
        <img
          src="https://images.unsplash.com/photo-1564613655478-0e0ec220b23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjaXR5JTIwc2t5bGluZSUyMHN1bnNldHxlbnwxfHx8fDE3NjI4MDY1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Financial city skyline"
          onError={(e) => {
            e.target.src = '/edificio-2.jpg';
          }}
        />
      </div>

      {/* Overlay gradient oscuro */}
      <div className="hero-figma-overlay" />

      {/* Partículas doradas animadas */}
      <div className="hero-figma-particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="hero-figma-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Contenido Principal */}
      <div className="hero-figma-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-figma-inner"
        >
          {/* Logo/Marca */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-figma-brand"
          >
            <h1>SUMMIT CAPITAL</h1>
            <div className="hero-figma-brand-line" />
          </motion.div>

          {/* Título - Animado al cambiar slide e idioma */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={`title-${lang}-${activeSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="hero-figma-title"
            >
              {content.title}
            </motion.h2>
          </AnimatePresence>

          {/* Subtítulo - Animado al cambiar slide e idioma */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${lang}-${activeSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hero-figma-subtitle"
            >
              {content.subtitle}
            </motion.p>
          </AnimatePresence>

          {/* Indicadores de Slide (bullets) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hero-figma-pagination"
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`hero-figma-bullet ${activeSlide === index ? 'active' : ''}`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Indicador de Scroll (flecha) - SOLO VISIBLE DENTRO DEL HERO */}
        {showScroll && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 0.5,
            }}
            className="hero-figma-scroll"
            onClick={() => {
              const nosotrosSection = document.getElementById('nosotros');
              if (nosotrosSection) {
                nosotrosSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="#E1B040"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        )}
      </div>
    </section>
  );
}