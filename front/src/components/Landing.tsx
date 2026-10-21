import { services, values, stats, teamMembers, testimonials } from "../data/main";

function Section({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        {/* <p className="hero-tagline">Gestión de infraestructura para empresas</p> */}
        <h1>Tecnología <span className="highlight">operativa</span> para tu negocio</h1>
        <p>Brindamos soluciones de infraestructura en nube, redes, ciberseguridad y servidores dedicados, con monitoreo continuo y soporte especializado.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Solicitar presupuesto</a>
          <a href="#servicios" className="btn btn-secondary">Nuestros servicios</a>
        </div>
        <div className="hero-stats">
          {stats.map((s) => (
            <div key={s.id} className="stat-mini">
              <span className="stat-mini-value">{s.value}</span>
              <span className="stat-mini-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatWeDo() {
  return (
    <Section id="servicios" className="section">
      <div className="container">
        <header className="section-header">
          <h2>¿Qué ofrecemos?</h2>
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
    </Section>
  );
}

export function ValuesSection() {
  return (
    <Section id="nosotros" className="section section-light">
      <div className="container">
        <header className="section-header">
          <h2>Nuestros valores</h2>
          <p>Principios que guían cada decisión y cada servicio que entregamos.</p>
        </header>
        <div className="values-grid">
          {values.map((value) => (
            <div key={value.id} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function StatsSection() {
  return (
    <Section className="section section-dark">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.id} className="stat-block">
              <span className="stat-number">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function TeamSection() {
  return (
    <Section id="team" className="section">
      <div className="container">
        <header className="section-header">
          <h2>Conoce al equipo</h2>
          <p>Profesionales con trayectoria en infraestructura de TI y ciberseguridad.</p>
        </header>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1e3a5f&color=fff&bold=true`} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function TestimonialsSection() {
  return (
    <Section id="testimonios" className="section section-dark">
      <div className="container">
        <header className="section-header">
          <h2>Lo que dicen nuestros clientes</h2>
          <p>Resultados medibles en la operación de sus redes, servidores y sistemas.</p>
        </header>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <blockquote key={t.id} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`star ${i < t.rating ? "filled" : ""}`} />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <footer className="testimonial-author">
                <strong>{t.client}</strong>
                <span>{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function ContactSection() {
  return (
    <Section id="contacto" className="section">
      <div className="container">
        <div className="contact-card">
          <h2>Hablemos de tu infraestructura</h2>
          <p>Cuéntanos qué necesitas y te pondremos en contacto para proponer una solución ajustada a tu negocio.</p>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" name="name" placeholder="Nombre completo" required />
              <input type="email" name="email" placeholder="Correo electrónico" required />
            </div>
            <input type="text" name="company" placeholder="Empresa" />
            <textarea name="message" placeholder="Cuéntanos tu necesidad, número de servidores, red, nube, etc." required rows={5}></textarea>
            <button type="submit" className="btn btn-primary btn-full">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">A3 TECHNOLOGY E.A.S </span>
            <p className="footer-tagline">Soluciones de infraestructura para empresas que requieren operación, seguridad y escalabilidad.</p>
          </div>
          <div className="footer-links">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#cloud">Cloud Computing</a></li>
              <li><a href="#network">Redes y Conectividad</a></li>
              <li><a href="#security">Ciberseguridad</a></li>
              <li><a href="#servers">Casa Datos y Servidores</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#about">Nosotros</a></li>
              <li><a href="#team">Equipo</a></li>
              <li><a href="#testimonials">Testimonios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="GitHub">GitHub</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 A3 TECHNOLOGY E.A.S . Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
