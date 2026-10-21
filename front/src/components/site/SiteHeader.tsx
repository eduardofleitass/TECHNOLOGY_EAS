import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { IconArrowRight, IconClose, IconMenu, IconSearch } from "./Icons";
import { navItems, services, projects } from "../../data/site";

type SearchHit = { label: string; href: string; kind: string };

const searchIndex: SearchHit[] = [
  ...services.items.map((s) => ({ label: s.title, href: "#servicios", kind: "Servicio" })),
  ...projects.items.map((p) => ({ label: p.title, href: "#proyectos", kind: "Proyecto" })),
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hits = query.trim()
    ? searchIndex.filter((h) => h.label.toLowerCase().includes(query.trim().toLowerCase()))
    : searchIndex;

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Brand />

        <nav className="header-nav" aria-label="Navegación principal">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link${index === 0 ? " is-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-button"
            aria-label="Buscar en el sitio"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
          >
            <IconSearch size={19} />
          </button>

          <a href="#contacto" className="btn btn-primary btn-header">
            Solicitar asesoría
            <IconArrowRight size={16} />
          </a>

          <button
            type="button"
            className="icon-button menu-toggle"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="search-panel">
          <div className="container">
            <input
              autoFocus
              type="search"
              className="search-input"
              placeholder="Buscar servicios o proyectos…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <ul className="search-results">
              {hits.length === 0 && <li className="search-empty">Sin resultados para “{query}”.</li>}
              {hits.slice(0, 6).map((hit) => (
                <li key={`${hit.kind}-${hit.label}`}>
                  <a href={hit.href} onClick={() => setSearchOpen(false)}>
                    <span className="search-kind">{hit.kind}</span>
                    {hit.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className={`mobile-nav${menuOpen ? " is-open" : ""}`}>
        <nav aria-label="Navegación móvil">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Solicitar asesoría
            <IconArrowRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
