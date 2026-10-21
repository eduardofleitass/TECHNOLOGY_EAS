import { useState } from "react";

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="site-brand">
          <a href="#inicio" className="brand">
            <span className="brand-logo">A3 TECHNOLOGY E.A.S</span>
            <span className="brand-name">Servicios de Infraestructura</span>
          </a>
        </div>

        <nav className="site-nav">
          <a href="#inicio" className="nav-link">Inicio</a>
          <a href="#nosotros" className="nav-link">Nosotros</a>
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#proyectos" className="nav-link">Proyectos</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>

        <div className="site-actions">
          <button
            className="btn-search"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Buscar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="search-toggle">Buscar</span>
          </button>

          {searchOpen && (
            <div className="search-dropdown">
              <input
                type="text"
                placeholder="Buscar servicios, proyectos, equipo…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <div className="search-results">
                  <a href="#servicios" className="search-result">
                    <strong>Servicio</strong>
                    <span className="search-result-text">{query}</span>
                  </a>
                  <a href="#proyectos" className="search-result">
                    <strong>Proyecto</strong>
                    <span className="search-result-text">{query}</span>
                  </a>
                </div>
              )}
            </div>
          )}

          <a href="#contacto" className="btn-ask">
            Solicitar asesoria
          </a>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
