import { services } from "../../data/site";
import { Icon, IconArrowRight } from "./Icons";

export function ServicesSection() {
  return (
    <section className="section section-light" id="servicios">
      <div className="container">
        <div className="section-head split">
          <div className="section-head-main">
            <p className="eyebrow eyebrow-dash">{services.eyebrow}</p>
            <h2 className="section-title">{services.title}</h2>
          </div>
          <div className="section-aside">
            <a className="link-arrow" href={services.link.href}>
              {services.link.label}
              <IconArrowRight size={15} />
            </a>
            <p>{services.description}</p>
          </div>
        </div>

        <div className="services-grid">
          {services.items.map((service) => (
            <article className="service-card" key={service.id}>
              <div className="service-figure">
                <img src={service.image} alt={service.title} loading="lazy" />
                <span className="service-badge" aria-hidden="true">
                  <Icon name={service.icon} size={22} />
                </span>
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
