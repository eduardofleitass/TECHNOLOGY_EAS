export type InfraStatus = "online" | "warning" | "offline" | "maintenance";

export type InfraType =
  | "server"
  | "switch"
  | "firewall"
  | "loadbalancer"
  | "storage"
  | "database"
  | "ops"

export interface InfraItem {
  id: string;
  name: string;
  type: InfraType;
  status: InfraStatus;
  ip: string;
  os: string;
  location: string;
  lastCheck: string;
  load: number;
  alerts: number;
  uptime: string;
}

export interface Alert {
  id: string;
  severity: "high" | "medium" | "low";
  message: string;
  source: string;
  time: string;
  resolved: boolean;
}
