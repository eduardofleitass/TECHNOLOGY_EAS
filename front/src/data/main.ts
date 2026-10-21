export type ServiceType =
  | "cloud"
  | "network"
  | "security"
  | "servers"
  | "monitoring"
  | "support"

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  grade: number
  features: string[]
}

export interface CompanyValue {
  id: string
  title: string
  description: string
  icon: string
}

export interface Stat {
  id: string
  label: string
  value: string
  suffix: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
}

export interface Testimonial {
  id: string
  client: string
  role: string
  text: string
  rating: number
}

export const services: Service[] = [
  {
    id: "cloud",
    title: "Cloud Computing",
    description:
      "Migración, gestión y optimización de entornos en nube pública, privada y híbrida. Alta disponibilidad y costos controlados.",
    icon: "☁️",
    grade: 5,
    features: [
      "Migración a la nube y reingeniería de aplicaciones",
      "Infraestructura como código (IaC) con Terraform",
      "Optimización de costos y escalabilidad automática",
      "Almacenamiento y gestión de bases de datos en la nube",
    ],
  },
  {
    id: "network",
    title: "Redes y Conectividad",
    description:
      "Diseño, implementación y mantenimiento de redes empresariales, WAN, VPN y conectividad de alta performance.",
    icon: "🌐",
    grade: 5,
    features: [
      "Diseño de redes LAN, WLAN y segmentación de tráfico",
      "Conectividad multi-POP y optimización de enrutamiento",
      "VPN, MPLS y redes SD-WAN para sitios remotos",
      "Redes perimetrales y segmentación Zero Trust",
    ],
  },
  {
    id: "security",
    title: "Ciberseguridad",
    description:
      "Protección de la infraestructura contra amenazas actuales: firewalls, detección de intrusiones, respuesta a incidentes y auditorías.",
    icon: "🛡️",
    grade: 5,
    features: [
      "Implementación de firewalls y soluciones NGIPS/IDS",
      "Monitoreo 24/7 y gestión de eventos de seguridad (SIEM)",
      "Auditorías de seguridad y cumplimiento (ISO 27001, NIST)",
      "Respuesta a incidentes y capacitación de conciencia",
    ],
  },
  {
    id: "servers",
    title: "Casa Datos y Servidores",
    description:
      "Segmentación y gestión de servidores dedicados, virtualizados y on-premises en nuestras instalaciones o en las de cliente.",
    icon: "🖥️",
    grade: 5,
    features: [
      "Virtualización de servidores con VMware / Proxmox",
      "Servidores y almacenamiento dedicados",
      "Seguridad física y control de accesos en instalaciones",
      "Respaldo, recuperación ante desastres y RTO/RPO gestionados",
    ],
  },
  {
    id: "monitoring",
    title: "Monitoreo 24/7",
    description:
      "Supervisión continua de infraestructura bajo licencia: rendimiento, disponibilidad, estado de los sistemas y alertas proactivas.",
    icon: "📊",
    grade: 5,
    features: [
      "Supervisión de servidores, redes y aplicaciones",
      "Alertas en tiempo real e incidentes",
      "Reportes de disponibilidad y servicio",
      "Gestión de incidentes con SLA y prioridades",
    ],
  },
  {
    id: "support",
    title: "Soporte Técnico Gestionado",
    description:
      "Equipo de soporte especializado disponible para resolver incidencias y facilitar el crecimiento de negocio.",
    icon: "🛠️",
    grade: 5,
    features: [
      "Soporte crítico y rutinario por ticket",
      "Atención priorizada y SLA ajustables",
      "Capacitación y documentación de TI",
      "Planificación y gestión de proyectos de TI",
    ],
  },
]

export const values: CompanyValue[] = [
  { id: "v1", title: "Confiabilidad", description: "Invirtiendo en equipos, redes y procedimientos para que nuestros clientes siempre estén operativos.", icon: "⚙️" },
  { id: "v2", title: "Seguridad", description: "Protegiendo cada capa de la infraestructura con prácticas de seguridad de protector.", icon: "🔒" },
  { id: "v3", title: "Rendimiento", description: "Optimizando recursos para ofrecer mayor velocidad y eficiencia en cada proceso.", icon: "🚀" },
  { id: "v4", title: "Prestación", description: "Atención rienda suelta, transparente y orientada a resolver el problema.", icon: "🤝" },
]

export const stats: Stat[] = [
  { id: "s1", label: "Uptime garantizado", value: "99.9", suffix: "%" },
  { id: "s2", label: "Servicios activos", value: "120+", suffix: "" },
  { id: "s3", label: "Paises con cobertura", value: "15+", suffix: "" },
  { id: "s4", label: "Equipos monitorizados", value: "2.500+", suffix: "" },
]

export const teamMembers: TeamMember[] = [
  { id: "m1", name: "Alex Ramírez", role: "CEO y Especialista en Infraestructura", bio: "20 años de experiencia en arquitectura de TI y cloud. Fundador de la empresa." },
  { id: "m2", name: "Sofía Vega", role: "Directora de Ciberseguridad", bio: "Especialista en seguridad de redes y gestión de riesgo de TI." },
  { id: "m3", name: "Carlos Mendoza", role: "Ingeniero de Redes y Conectividad", bio: "Diseñador de redes complejas en entornos corporate e híbridos." },
]

export const testimonials = [
  { id: "t1", client: "Grupo López", role: "Coordinador de TI", text: "La empresa gestiona nuestros servidores y redes. El uptime es consistente y el soporte es rápido.", rating: 5 },
  { id: "t2", client: "Finanzas del Norte", role: "Jefe de Infraestructura", text: "Migración a cloud realizada sin interrupciones. El equipo es profesional y técnico.", rating: 5 },
  { id: "t3", client: "Transporte Express", role: "Gerente de TI", text: "Monitoreo 24/7 y soporte gestionado. Redujeron más de la mitad los incidentes sin solución.", rating: 5 },
]

export interface PartnerLogo {
  name: string
  logo: string
  url: string
}

export const partnerLogos: PartnerLogo[] = [
  { name: "VMware", logo: "https://netlogic.com.py/uploads/marca/vmware-1642421984.jpg", url: "https://netlogic.com.py/solucion/2" },
  { name: "Microsoft", logo: "https://netlogic.com.py/uploads/marca/microsoft-1642422169.jpg", url: "https://netlogic.com.py/solucion/2" },
  { name: "Cisco", logo: "https://netlogic.com.py/uploads/marca/cisco-1642422698.jpg", url: "https://netlogic.com.py/solucion/2" },
  { name: "HPE", logo: "https://netlogic.com.py/uploads/marca/hewlett-packard-enterprise-1642422669.jpg", url: "https://netlogic.com.py/solucion/2" },
  { name: "Citrix", logo: "https://netlogic.com.py/uploads/marca/citrix-1642422273.jpg", url: "https://netlogic.com.py/solucion/2" },
  { name: "Veeam", logo: "https://netlogic.com.py/uploads/marca/veeam-1642422477.jpg", url: "https://netlogic.com.py/solucion/2" },
  { name: "Veritas", logo: "https://netlogic.com.py/uploads/marca/veritas-1642422502.jpg", url: "https://netlogic.com.py/solucion/2" },
  { name: "QNAP", logo: "https://netlogic.com.py/uploads/marca/qnap-1642422725.jpg", url: "https://netlogic.com.py/solucion/2" },
  { name: "Red Hat", logo: "https://netlogic.com.py/uploads/marca/red-hat-1642422873.png", url: "https://netlogic.com.py/solucion/2" },
]
