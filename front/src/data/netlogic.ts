export interface NetlogicService {
  id: string;
  title: string;
  description: string;
  image?: string;
  logos: string[];
}

export interface NetlogicSection {
  id: string;
  title: string;
  description: string;
  service: NetlogicService;
}

export const netlogicServices: NetlogicSection[] = [
  {
    id: "virtualizacion",
    title: "Virtualización",
    description:
      "Esta solución promete aumentar la escalabilidad, flexibilidad y agilidad de TI, al mismo tiempo que genera ahorros significativos en los costos y mayor eficiencia a negocios de cualquier tamaño. La virtualización, ya sea de servidores, aplicaciones y almacenamiento, crea representaciones basadas en software de los mismos, en lugar de aplicaciones físicas.",
    service: {
      id: "virtualizacion",
      title: "Virtualización",
      description: "",
      image: "https://netlogic.com.py/uploads/solucions/virtualizacion-1642421944.jpg",
      logos: ["https://netlogic.com.py/uploads/marca/microsoft-1642422169.jpg", "https://netlogic.com.py/uploads/marca/vmware-1642421984.jpg", "https://netlogic.com.py/uploads/marca/citrix-1642422273.jpg"],
    },
  },
  {
    id: "continuidad",
    title: "Continuidad",
    description:
      "Las aplicaciones críticas deben estar disponibles en cualquier momento, nuestras soluciones de Continuidad garantizan la reducción del tiempo de inactividad de servicios de horas a tan solo minutos con el fin de asegurar, en la medida posible, la restauración completa de los sistemas ante una contingencia de cualquier índole. Así como permite crear copias de seguridad de los datos críticos de la empresa, eliminar de datos duplicados, la replicación y la recuperación, desde cinta, disco, instantánea o en la nube, en un entorno físico o virtual y sobre sistemas operativos heterogéneos.",
    service: {
      id: "continuidad",
      title: "Continuidad",
      description: "",
      image: "https://netlogic.com.py/uploads/solucions/continuidad-1642422456.jpg",
      logos: ["https://netlogic.com.py/uploads/marca/veeam-1642422477.jpg", "https://netlogic.com.py/uploads/marca/veritas-1642422502.jpg", "https://netlogic.com.py/uploads/marca/vmware-1642421984.jpg"],
    },
  },
  {
    id: "hardware",
    title: "Hardware",
    description:
      "Ofrecemos gran variedad de equipos adaptados a las necesidades de cada organización, como servidores, storage, puestos de trabajo completos, entre otros. Trabajamos con las principales marcas referentes dentro de cada solución para brindar al cliente un óptimo desempeño y aprovechamiento de sus equipos.",
    service: {
      id: "hardware",
      title: "Hardware",
      description: "",
      image: "https://netlogic.com.py/uploads/solucions/hardware-1642422634.jpg",
      logos: ["https://netlogic.com.py/uploads/marca/hewlett-packard-enterprise-1642422669.jpg", "https://netlogic.com.py/uploads/marca/cisco-1642422698.jpg", "https://netlogic.com.py/uploads/marca/qnap-1642422725.jpg"],
    },
  },
  {
    id: "plataformas",
    title: "Plataformas",
    description:
      "Ofrecemos a nuestros clientes diferentes plataformas basadas en marcas líderes en el mercado y adaptadas a las necesidades de nuestros clientes, pudiendo ser una combinación de sistemas operativos, hipervisores, nubes privadas, públicas o híbridas.",
    service: {
      id: "plataformas",
      title: "Plataformas",
      description: "",
      image: "https://netlogic.com.py/uploads/solucions/plataformas-1642422778.jpg",
      logos: ["https://netlogic.com.py/uploads/marca/microsoft-1642422169.jpg", "https://netlogic.com.py/uploads/marca/citrix-1642422273.jpg", "https://netlogic.com.py/uploads/marca/vmware-1642421984.jpg", "https://netlogic.com.py/uploads/marca/red-hat-1642422873.png"],
    },
  },
  {
    id: "hiperconvergencia",
    title: "Hiperconvergencia",
    description:
      "Ejecute sus aplicaciones con mayor eficiencia y evite los complejos problemas que se presentan en los sistemas tradicionales de administración del hardware día a día, así como la dificultad que representa crecer la capacidad de la infraestructura. Las soluciones de Hiperconvergencia garantizan una implementación más sencilla, más compatible, así como la optimización de tareas, escalabilidad y ciberseguridad.",
    service: {
      id: "hiperconvergencia",
      title: "Hiperconvergencia",
      description: "",
      image: "https://netlogic.com.py/uploads/solucions/hiperconvergencia-1642422955.jpg",
      logos: ["https://netlogic.com.py/uploads/marca/hewlett-packard-enterprise-1642422669.jpg", "https://netlogic.com.py/uploads/marca/cisco-1642422698.jpg"],
    },
  },
  {
    id: "microinformatica",
    title: "Microinformática",
    description:
      "Asegure la disponibilidad de los servicios de su plataforma informática con el soporte de nuestro equipo técnico, sea de manera retoma u on-site, con una serie de servicios incluidos adaptados a sus necesidades específicas.",
    service: {
      id: "microinformatica",
      title: "Microinformática",
      description: "",
      image: "https://netlogic.com.py/uploads/solucions/microinformatica-1642423604.jpg",
      logos: [],
    },
  },
  {
    id: "helpdesk",
    title: "HelpDesk",
    description:
      "Obtenga un conjunto de recursos técnicos y humanos que permitan dar soporte a diferentes niveles de usuarios informáticos de su empresa, como ser: Servicio de soporte a usuarios de sistemas microinformáticos, siendo atendido de forma directa e individualizada por Técnicos Certificados en plataformas de Disponibilidad, Networking y Seguridad.",
    service: {
      id: "helpdesk",
      title: "HelpDesk",
      description: "",
      image: "https://netlogic.com.py/uploads/solucions/helpdesk-1642423664.jpg",
      logos: [],
    },
  },
  {
    id: "consultoria",
    title: "Consultoría",
    description:
      "Consultoría en plataformas físicas y virtualizadas, servidores, almacenamiento y aplicaciones, dimensionamiento de plataformas, reingeniería y proyectos de continuidad de negocios (aquí incluye: backup, disaster recovery, alta disponibilidad y replicación). Servicios de implementación y soporte de 24/7, 8/5, remoto y presencial.",
    service: {
      id: "consultoria",
      title: "Consultoría",
      description: "",
      image: "https://netlogic.com.py/uploads/solucions/consultoria-1642423715.jpg",
      logos: [],
    },
  },
];

export const serviceTrackers = [
  { id: "virtualizacion", label: "Virtualización" },
  { id: "continuidad", label: "Continuidad" },
  { id: "hardware", label: "Hardware" },
  { id: "plataformas", label: "Plataformas" },
  { id: "hiperconvergencia", label: "Hiperconvergencia" },
  { id: "microinformatica", label: "Microinformática" },
  { id: "helpdesk", label: "HelpDesk" },
  { id: "consultoria", label: "Consultoría" },
];
