import { Injectable } from "@nestjs/common";
import type { Alert } from "../infrastructure/types.js";
import { alertsMockData } from "../infrastructure/mock-data.js";

@Injectable()
export class AlertsService {
  private alerts: Alert[] = [...alertsMockData];

  findAll(): Alert[] {
    return this.alerts;
  }

  findById(id: string): Alert | undefined {
    return this.alerts.find((alert) => alert.id === id);
  }

  findBySeverity(severity: "high" | "medium" | "low"): Alert[] {
    return this.alerts.filter((alert) => alert.severity === severity);
  }

  findUnresolved(): Alert[] {
    return this.alerts.filter((alert) => !alert.resolved);
  }

  findBySource(source: string): Alert[] {
    return this.alerts.filter((alert) => alert.source === source);
  }

  markAsResolved(id: string): Alert | undefined {
    const alert = this.alerts.find((a) => a.id === id);
    if (alert) {
      alert.resolved = true;
    }
    return alert;
  }
}