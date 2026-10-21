import { useState } from "react";

export function Header({ title, subtitle, onMenuClick }: { title: string; subtitle: string; onMenuClick: () => void }) {
  const [search, setSearch] = useState("");

  return (
    <header className="header">
      <div className="header-left">
        <button className="icon-btn" onClick={onMenuClick} aria-label="Abrir menú">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div>
          <h1>{title}</h1>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="header-right">
        <div className="search-box">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Buscar…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="user-box">
          <img src="https://ui-avatars.com/api/?name=Admin+User&background=1e3a5f&color=fff&bold=true" alt="avatar" />
          <div>
            <strong>Admin User</strong>
            <span>admin@infra.company</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
