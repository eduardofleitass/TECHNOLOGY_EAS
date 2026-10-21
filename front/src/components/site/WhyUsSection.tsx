import { whyUs } from "../../data/site";
import { Icon } from "./Icons";

export function WhyUsSection() {
  return (
    <section className="section section-light" id="nosotros">
      <div className="container whyus">
        <div className="whyus-intro">
          <p className="eyebrow eyebrow-dash">{whyUs.eyebrow}</p>
          <h2 className="section-title">{whyUs.title}</h2>
        </div>

        <div className="whyus-grid">
          {whyUs.items.map((item) => (
            <article className="whyus-item" key={item.title}>
              <span className="whyus-icon">
                <Icon name={item.icon} size={24} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
