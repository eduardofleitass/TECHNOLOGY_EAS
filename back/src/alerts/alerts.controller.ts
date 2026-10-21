import {
  Controller,
  Get,
  Param,
  Query,
  Patch,
} from "@nestjs/common";
import { AlertsService } from "./alerts.service.js";
import type { Alert } from "../infrastructure/types.js";

@Controller("alerts")
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Get()
  findAll(
    @Query("severity") severity?: "high" | "medium" | "low",
    @Query("resolved") resolved?: string,
    @Query("source") source?: string,
  ): Alert[] {
    if (severity) return this.alertsService.findBySeverity(severity);
    if (resolved === "false") return this.alertsService.findUnresolved();
    if (source) return this.alertsService.findBySource(source);
    return this.alertsService.findAll();
  }

  @Get(":id")
  findById(@Param("id") id: string): Alert | undefined {
    return this.alertsService.findById(id);
  }

  @Patch(":id/resolve")
  markAsResolved(@Param("id") id: string): Alert | undefined {
    return this.alertsService.markAsResolved(id);
  }
}