import { contactPoints, footer } from "../../data/site";
import { Brand } from "./Brand";
import { Icon, IconFacebook, IconInstagram, IconLinkedin } from "./Icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>{footer.description}</p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">
              <IconLinkedin size={18} />
            </a>
            <a href="#" aria-label="Instagram">
              <IconInstagram size={18} />
            </a>
            <a href="#" aria-label="Facebook">
              <IconFacebook size={18} />
            </a>
          </div>
        </div>

        {footer.columns.map((column) => (
          <nav className="footer-column" key={column.title} aria-label={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="footer-column">
          <h3>Contacto</h3>
          <ul className="footer-contact">
            {contactPoints.map((point) => (
              <li key={point.label}>
                <span className="footer-contact-icon">
                  <Icon name={point.icon} size={16} />
                </span>
                <span>{point.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {footer.year} A3 TECHNOLOGY E.A.S. Todos los derechos reservados.
        </p>
        <ul>
          {footer.legal.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
