import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Users, PieChart } from "lucide-react";

// TEXTOS EN ESPAÑOL E INGLÉS (actualizados con detalle)
const SERVICES_COPY = {
  es: {
    title: "Nuestros Servicios",
    subtitle: "Soluciones integrales para la gestión, inversión y administración patrimonial.",
    items: [
      {
        title: "Wealth Management",
        text: "Nos dedicamos a confeccionar carteras de inversión acordes a los perfiles y objetivos de cada inversor, brindando acompañamiento en cada etapa del proceso. Creamos estrategias de participación activa o pasiva, adaptándonos a las necesidades y el deseo de participación de cada cliente.",
        details: null,
      },
      {
        title: "Trading",
        text: "Ofrecemos las mejores opciones a la hora de elegir invertir en activos financieros como:",
        details: [
          "Acciones",
          "Bonos",
          "Commodities",
          "Derivados",
          "ETFs",
          "Fondos Mutuos",
          "Hedge Funds",
          "Monedas",
          "Productos Estructurados",
        ],
      },
      {
        title: "Family Offices",
        text: "Ofrecemos un servicio integral donde llevamos a cabo la gestión de grandes patrimonios, guiando a nuestros clientes en la diligencia de asuntos hereditarios, legales y fiscales.",
        details: null,
      },
      {
        title: "Reporting",
        text: "La transparencia es un pilar clave en nuestro accionar, trabajamos dedicadamente para lograr una comunicación fluida con cada cliente, brindando actualizaciones de status y reportes llevados a cabo por nuestros asesores. De forma online, se podrá acceder a:",
        details: [
          "Estados de cuenta y movimientos de cuenta corriente.",
          "Asset allocation y performance del portfolio.",
          "Retorno de cada activo.",
          "Análisis integral de los activos en cartera.",
        ],
      },
    ],
  },
  en: {
    title: "Our Services",
    subtitle: "Comprehensive solutions for wealth management, investment and portfolio administration.",
    items: [
      {
        title: "Wealth Management",
        text: "We design investment portfolios according to each investor's profile and objectives, offering guidance throughout every stage of the process.",
        details: null,
      },
      {
        title: "Trading",
        text: "When choosing to invest in financial assets, we offer the following options:",
        details: [
          "Actions",
          "Bonds",
          "Commodities",
          "Derivatives",
          "ETFs",
          "Mutual Funds",
          "Hedge Funds",
          "Currencies",
          "Structured Products",
        ],
      },
      {
        title: "Family Offices",
        text: "We provide a comprehensive service for managing large estates, assisting clients with inheritance, legal, and tax matters.",
        details: null,
      },
      {
        title: "Reporting",
        text: "Communication is key to our practice. When working with individuals and institutions, our goal is to achieve fluid communication with each client. We offer permanent access to online reports, status updates, and data analysis executed by our advisors. Online accessible data:",
        details: [
          "Account movements and statements.",
          "Asset allocation and portfolio performance.",
          "Asset return.",
          "Comprehensive analysis of assets.",
        ],
      },
    ],
  },
};

// Mapeo de íconos (en el orden correcto según tu diseño)
const serviceIcons = [
  <PieChart className="service-icon" strokeWidth={1.5} />,
  <BarChart3 className="service-icon" strokeWidth={1.5} />,
  <Users className="service-icon" strokeWidth={1.5} />,
  <TrendingUp className="service-icon" strokeWidth={1.5} />,
];

export default function Services({ lang }) {
  const content = SERVICES_COPY[lang];

  return (
    <section id="servicios" className="services-figma">
      <div className="services-figma-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="services-figma-header"
        >
          <h2 className="services-figma-title">{content.title}</h2>
          <p className="services-figma-subtitle">{content.subtitle}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="services-figma-grid">
          {content.items.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="service-figma-card"
            >
              {/* Icon */}
              <div className="service-figma-icon">{serviceIcons[index]}</div>

              {/* Title */}
              <h3 className="service-figma-card-title">{service.title}</h3>

              {/* Description */}
              <p className="service-figma-card-text">{service.text}</p>

              {/* Details list (si existe) */}
              {service.details && (
                <ul className="service-figma-details">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}