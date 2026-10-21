import { services, partnerLogos } from "../data/main";

export function ServicesSection() {
  return (
    <section id="servicios" className="section section-light">
      <div className="container">
        <header className="section-header">
          <h2>Servicios</h2>
          <p>Soluciones integrales de infraestructura de TI para empresas que necesitan operación, seguridad y escalabilidad.</p>
        </header>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-icon">
                <span className="service-icon-emoji">{service.icon}</span>
                <div className="service-grade">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`grade-star ${i < service.grade ? "filled" : ""}`} />
                  ))}
                </div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnersSection() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="client-logos">
          {partnerLogos.map((logo) => (
            <a key={logo.name} href={logo.url} target="_blank" rel="noopener">
              <img src={logo.logo} alt={logo.name} className="client-logo" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
