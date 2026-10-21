import heroImage from "../../assets/img/hero-server.jpg";
import { hero } from "../../data/site";
import { Icon, IconArrowRight } from "./Icons";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div
        className="hero-media"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>

          <h1 className="hero-title">
            {hero.titleLines.map((line, index) => (
              <span
                key={line}
                className={index === hero.accentLine ? "line is-accent" : "line"}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="hero-text">{hero.description}</p>

          <div className="hero-actions">
            <a href={hero.primaryCta.href} className="btn btn-primary btn-lg">
              {hero.primaryCta.label}
              <IconArrowRight size={17} />
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-ghost btn-lg">
              {hero.secondaryCta.label}
              <IconArrowRight size={16} />
            </a>
          </div>
        </div>

        <ul className="hero-card">
          {hero.highlights.map((item) => (
            <li key={item.label}>
              <span className="hero-card-icon">
                <Icon name={item.icon} size={22} />
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
