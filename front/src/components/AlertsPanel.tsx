import { alertsData } from "../data/infrastructureData";
import type { Alert } from "../types/infrastructure";

const severityConfig = {
  high: { label: "Alta", className: "sev-high" },
  medium: { label: "Media", className: "sev-medium" },
  low: { label: "Baja", className: "sev-low" },
};

export function AlertsPanel() {
  const unresolved = alertsData.filter((a) => !a.resolved);

  return (
    <section className="alerts-panel">
      <div className="panel-header">
        <div>
          <h3>Alertas recientes</h3>
          <p>{unresolved.length} activas</p>
        </div>
        <button className="btn btn-ghost">Ver todo</button>
      </div>
      <div className="alerts-list">
        {alertsData.map((alert: Alert) => (
          <div key={alert.id} className={`alert-item ${!alert.resolved ? "unresolved" : ""}`}>
            <span className={`sev-badge ${severityConfig[alert.severity].className}`}>{severityConfig[alert.severity].label}</span>
            <div className="alert-body">
              <p className="alert-message">{alert.message}</p>
              <p className="alert-source">{alert.source}</p>
            </div>
            <span className="alert-time">{alert.time}</span>
            {!alert.resolved && <span className="alert-close">×</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default AlertsPanel;
