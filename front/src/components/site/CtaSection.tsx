import ctaImage from "../../assets/img/cta-edificio.jpg";
import { cta } from "../../data/site";
import { Icon, IconArrowRight } from "./Icons";

export function CtaSection() {
  return (
    <section className="cta" id="contacto">
      <div className="cta-media" style={{ backgroundImage: `url(${ctaImage})` }} aria-hidden="true" />
      <div className="cta-scrim" aria-hidden="true" />

      <div className="container cta-inner">
        <div className="cta-copy">
          <p className="eyebrow">{cta.eyebrow}</p>
          <h2 className="section-title">{cta.title}</h2>
          <p className="cta-text">{cta.description}</p>
          <a href={cta.button.href} className="btn btn-primary btn-lg">
            {cta.button.label}
            <IconArrowRight size={17} />
          </a>
        </div>

        <ul className="cta-card">
          {cta.items.map((item) => (
            <li key={item.title}>
              <span className="cta-card-icon">
                <Icon name={item.icon} size={22} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
