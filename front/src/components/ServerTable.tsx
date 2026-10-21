import type { InfraItem } from "../types/infrastructure";
import { StatusBadge } from "./ServerCard";

export function ServerTable({ items }: { items: InfraItem[] }) {
  return (
    <div className="table-wrap">
      <table className="server-table">
        <thead>
          <tr>
            <th>Servidor</th>
            <th>Tipo</th>
            <th>Dirección IP</th>
            <th>Sistema</th>
            <th>Ubicación</th>
            <th>Carga</th>
            <th>Alertas</th>
            <th>Estado</th>
            <th>Último check</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="cell-name">
                <div className="cell-name-content">
                  <span className="cell-avatar">
                    {item.type === "server" ? "🖥️" : item.type === "firewall" ? "🛡️" : item.type === "switch" ? "🌐" : item.type === "loadbalancer" ? "⚖️" : item.type === "storage" ? "💾" : "🗄️"}
                  </span>
                  <div>
                    <span className="cell-name-text">{item.name}</span>
                    <span className="cell-id">{item.id}</span>
                  </div>
                </div>
              </td>
              <td className="cell-type">{typeLabel(item.type)}</td>
              <td className="cell-ip">{item.ip}</td>
              <td className="cell-os">{item.os}</td>
              <td className="cell-loc">{item.location}</td>
              <td className="cell-load">
                <span className={`load-pct ${item.load > 0.7 ? "high" : item.load > 0.4 ? "mid" : ""}`}>{Math.round(item.load * 100)}%</span>
              </td>
              <td className="cell-alerts">{item.alerts}</td>
              <td className="cell-status"><StatusBadge status={item.status} /></td>
              <td className="cell-time">{item.lastCheck}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function typeLabel(type: InfraItem["type"]): string {
  return type.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
}
