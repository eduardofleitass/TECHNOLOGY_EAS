import type { IconName } from "../components/site/Icons";
import imgServidores from "../assets/img/svc-servidores.jpg";
import imgRedes from "../assets/img/svc-redes.jpg";
import imgSeguridad from "../assets/img/svc-seguridad.jpg";
import imgNube from "../assets/img/svc-nube.jpg";
import imgSoporte from "../assets/img/svc-soporte.jpg";
import imgHero from "../assets/img/hero-server.jpg";
import imgOficina from "../assets/img/proj-oficina.jpg";

/* ============================================================
   Contenido del sitio — A3 TECHNOLOGY E.A.S
   Todo el texto editable vive aca. Las imagenes se importan
   desde src/assets/img y se resuelven con Vite.
   ============================================================ */

export interface NavItem {
  label: string;
  href: string;
}

export interface Highlight {
  icon: IconName;
  label: string;
}

export interface Service {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface Reason {
  icon: IconName;
  title: string;
  description: string;
}

export interface Client {
  name: string;
  sector: string;
}

export interface ContactPoint {
  icon: IconName;
  label: string;
  value: string;
}

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

export const hero = {
  eyebrow: "Infraestructura TI",
  titleLines: ["Base sólida", "para tu", "crecimiento"],
  accentLine: 2,
  description:
    "Diseñamos, implementamos y gestionamos soluciones de infraestructura tecnológica seguras, eficientes y escalables para empresas que no pueden detenerse.",
  primaryCta: { label: "Nuestros servicios", href: "#servicios" },
  secondaryCta: { label: "Conocer la empresa", href: "#nosotros" },
  highlights: [
    { icon: "shield", label: "Infraestructura segura" },
    { icon: "cloud", label: "Alta disponibilidad" },
    { icon: "chart", label: "Rendimiento confiable" },
    { icon: "users", label: "Soporte especializado" },
  ] as Highlight[],
};

export const services = {
  eyebrow: "Nuestros servicios",
  title: "Soluciones integrales en infraestructura TI",
  description:
    "Cubrimos todo el ciclo de vida de la infraestructura que sostiene tu operación: diagnóstico, diseño, implementación, monitoreo y soporte continuo.",
  link: { label: "Ver todos los servicios", href: "#servicios" },
  items: [
    {
      id: "servidores",
      icon: "server",
      title: "Servidores y Data Center",
      description:
        "Diseño, instalación y mantenimiento de servidores físicos y virtuales para cargas críticas.",
      image: imgServidores,
    },
    {
      id: "redes",
      icon: "network",
      title: "Redes y Conectividad",
      description:
        "Cableado estructurado, switching, routing y WiFi corporativo con cobertura y desempeño medibles.",
      image: imgRedes,
    },
    {
      id: "seguridad",
      icon: "lock",
      title: "Ciberseguridad",
      description:
        "Firewall, segmentación, respaldo y monitoreo continuo para proteger la información del negocio.",
      image: imgSeguridad,
    },
    {
      id: "cloud",
      icon: "cloud",
      title: "Cloud y Virtualización",
      description:
        "Nube privada, híbrida y pública, con migración planificada y costos previsibles.",
      image: imgNube,
    },
    {
      id: "soporte",
      icon: "support",
      title: "Soporte y Monitoreo",
      description:
        "Mesa de ayuda, monitoreo 24/7 y mantenimiento preventivo con acuerdos de nivel de servicio.",
      image: imgSoporte,
    },
  ] as Service[],
};

export const projects = {
  eyebrow: "Proyectos destacados",
  title: "Infraestructura que conecta oportunidades",
  link: { label: "Ver todos los proyectos", href: "#proyectos" },
  items: [
    {
      id: "data-center",
      tag: "Data Center",
      title: "Data Center corporativo",
      description:
        "Sala de servidores con redundancia eléctrica, climatización y monitoreo centralizado.",
      image: imgHero,
    },
    {
      id: "red-metropolitana",
      tag: "Redes",
      title: "Red metropolitana de fibra",
      description:
        "Enlace de alta disponibilidad entre casa matriz, depósitos y puntos de venta.",
      image: imgRedes,
    },
    {
      id: "sucursales",
      tag: "Conectividad",
      title: "Sucursales conectadas",
      description:
        "Estandarización de red y puestos de trabajo en doce sucursales del país.",
      image: imgOficina,
    },
  ] as Project[],
};

export const whyUs = {
  eyebrow: "¿Por qué elegirnos?",
  title: "Un socio estratégico en infraestructura TI",
  items: [
    {
      icon: "award",
      title: "Experiencia comprobada",
      description: "Más de quince años acompañando operaciones que no pueden detenerse.",
    },
    {
      icon: "badge",
      title: "Equipo certificado",
      description: "Ingenieros con certificaciones de las marcas líderes del mercado.",
    },
    {
      icon: "bolt",
      title: "Respuesta ágil",
      description: "Atención remota inmediata y visitas en sitio coordinadas el mismo día.",
    },
    {
      icon: "sliders",
      title: "Soluciones a medida",
      description: "Cada propuesta parte de un diagnóstico, nunca de un catálogo.",
    },
  ] as Reason[],
};

export const clients = {
  eyebrow: "Nuestros clientes",
  title: "Empresas que confían en nosotros",
  // Nombres de referencia: reemplazar por los clientes reales antes de publicar.
  items: [
    { name: "Grupo Andes", sector: "Industria" },
    { name: "Banco del Sur", sector: "Finanzas" },
    { name: "Telecom PY", sector: "Telecomunicaciones" },
    { name: "Agro Industrial", sector: "Agronegocios" },
    { name: "Salud Plus", sector: "Salud" },
    { name: "Logística 24", sector: "Logística" },
  ] as Client[],
};

export const cta = {
  eyebrow: "Hablemos de tu proyecto",
  title: "Transformemos ideas en infraestructura real",
  description:
    "Contanos qué necesita tu empresa y armamos una propuesta técnica con alcance, plazos y costos claros.",
  button: { label: "Contactar ahora", href: "#contacto" },
  items: [
    {
      icon: "user",
      title: "Asesoría personalizada",
      description: "Un ingeniero revisa tu caso.",
    },
    {
      icon: "clock",
      title: "Respuesta rápida",
      description: "Primer contacto en 24 horas.",
    },
    {
      icon: "file",
      title: "Propuestas a la medida",
      description: "Alcance y costos por escrito.",
    },
  ] as Reason[],
};

export const contactPoints: ContactPoint[] = [
  { icon: "pin", label: "Oficina", value: "Asunción, Paraguay" },
  { icon: "phone", label: "Teléfono", value: "+595 21 000 000" },
  { icon: "mail", label: "Correo", value: "contacto@a3technology.com.py" },
  { icon: "clock", label: "Horario", value: "Lunes a viernes, 08:00 a 18:00" },
];

export const footer = {
  description:
    "Infraestructura, redes y ciberseguridad para empresas que necesitan operar sin interrupciones.",
  columns: [
    {
      title: "Servicios",
      links: [
        { label: "Servidores y Data Center", href: "#servicios" },
        { label: "Redes y Conectividad", href: "#servicios" },
        { label: "Ciberseguridad", href: "#servicios" },
        { label: "Cloud y Virtualización", href: "#servicios" },
        { label: "Soporte y Monitoreo", href: "#servicios" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Nosotros", href: "#nosotros" },
        { label: "Proyectos", href: "#proyectos" },
        { label: "Clientes", href: "#clientes" },
        { label: "Contacto", href: "#contacto" },
      ],
    },
  ],
  legal: [
    { label: "Términos de uso", href: "#" },
    { label: "Política de privacidad", href: "#" },
  ],
  year: 2026,
};
