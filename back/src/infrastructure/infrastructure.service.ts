import { Injectable } from "@nestjs/common";
import type { InfraItem, InfraType, InfraStatus } from "./types.js";
import { infrastructureMockData } from "./mock-data.js";

@Injectable()
export class InfrastructureService {
  private items: InfraItem[] = [...infrastructureMockData];

  findAll(): InfraItem[] {
    return this.items;
  }

  findById(id: string): InfraItem | undefined {
    return this.items.find((item) => item.id === id);
  }

  findByType(type: InfraType): InfraItem[] {
    return this.items.filter((item) => item.type === type);
  }

  findByStatus(status: InfraStatus): InfraItem[] {
    return this.items.filter((item) => item.status === status);
  }

  getStats() {
    const total = this.items.length;
    const online = this.items.filter((s) => s.status === "online").length;
    const warning = this.items.filter((s) => s.status === "warning").length;
    const offline = this.items.filter((s) => s.status === "offline").length;
    const maintenance = this.items.filter((s) => s.status === "maintenance").length;

    return {
      total,
      online,
      warning,
      offline,
      maintenance,
      onlinePercentage: total > 0 ? Math.round((online / total) * 100) : 0,
    };
  }
}