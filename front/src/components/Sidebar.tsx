import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Dashboard", icon: "📊", path: "/" },
  { name: "Servidores", icon: "🖥️", path: "/servidores" },
  { name: "Soporte", icon: "🛡️", path: "/soporte" },
  { name: "Alertas", icon: "⚠️", path: "/alertas" },
  { name: "Reporte", icon: "📈", path: "/reporte" },
];

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-logo">A3 TECHNOLOGY E.A.S </span>
        <span className="brand-name">TIC Infrastructures</span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const active = pathname === item.path || pathname.startsWith(item.path + "/");
          return (
            <Link key={item.path} to={item.path} className={`nav-item ${active ? "active" : ""}`}>
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.name}</span>
              {active && <span className="nav-active"></span>}
            </Link>
          );
        })}
      </nav>
      <div className="sidebar-footer">
        <div className="status-dot"></div>
        <span>Todos operativos</span>
      </div>
    </aside>
  );
}

export default Sidebar;
