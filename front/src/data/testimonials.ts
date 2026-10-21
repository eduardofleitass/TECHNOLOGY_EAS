export interface Client {
  id: string;
  name: string;
  role: string;
  text: string;
}

export const testimonials: Client[] = [
  {
    id: "t1",
    name: "Grupo López",
    role: "Coordinador de TI",
    text: "La empresa gestiona nuestros servidores y redes. El uptime es consistente y el soporte es rápido.",
  },
  {
    id: "t2",
    name: "Finanzas del Norte",
    role: "Jefe de Infraestructura",
    text: "Migración a cloud realizada sin interrupciones. El equipo es profesional y técnico.",
  },
  {
    id: "t3",
    name: "Transporte Express",
    role: "Gerente de TI",
    text: "Monitoreo 24/7 y soporte gestionado. Redujeron más de la mitad los incidentes sin solución.",
  },
  {
    id: "t4",
    name: "Comercial Sud",
    role: "Director de TI",
    text: "El soporte técnico es de primera, atienden desde cualquier dispositivo y resuelven lo que necesitamos.",
  },
];
