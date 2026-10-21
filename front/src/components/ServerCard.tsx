import type { InfraItem } from "../types/infrastructure";

const statusConfig: Record<
  InfraItem["status"],
  { label: string; className: string; dot: string }
> = {
  online: { label: "En línea", className: "status-online", dot: "bg-emerald-400" },
  warning: { label: "Advertencia", className: "status-warning", dot: "bg-amber-400" },
  offline: { label: "Off-line", className: "status-offline", dot: "bg-red-400" },
  maintenance: { label: "Mantenimiento", className: "status-maintenance", dot: "bg-blue-400" },
};

export function StatusBadge({ status }: { status: InfraItem["status"] }) {
  const cfg = statusConfig[status];
  return (
    <span className={`badge ${cfg.className}`}>
      <span className={`dot ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

export function ServerCard({ item }: { item: InfraItem }) {
  return (
    <article className="server-card">
      <div className="card-top">
        <div className="card-avatar">
          <span className="card-avatar-icon">{item.type === "server" ? "🖥️" : item.type === "firewall" ? "🛡️" : item.type === "switch" ? "🌐" : item.type === "loadbalancer" ? "⚖️" : item.type === "storage" ? "💾" : "🗄️"}</span>
        </div>
        <StatusBadge status={item.status} />
      </div>
      <h3 className="card-name">{item.name}</h3>
      <p className="card-sub">{item.ip} · {item.os}</p>
      <div className="card-meta">
        <div className="meta-item">
          <span className="meta-label">Ubicación</span>
          <span className="meta-value">{item.location}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Último check</span>
          <span className="meta-value">{item.lastCheck}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Carga</span>
          <span className="meta-value">
            <div className="load-bar">
              <div className="load-fill" style={{ width: `${Math.min(item.load * 100, 100)}%` }} />
            </div>
            <span className={`load-pct ${item.load > 0.7 ? "high" : item.load > 0.4 ? "mid" : ""}`}>{Math.round(item.load * 100)}%</span>
          </span>
        </div>
      </div>
      <div className="card-flags">
        <span className="flag">🔔 {item.alerts} alertas</span>
        <span className="flag">⏱️ {item.uptime}</span>
      </div>
    </article>
  );
}

export default ServerCard;
