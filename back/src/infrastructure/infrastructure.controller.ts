import {
  Controller,
  Get,
  Param,
  Query,
} from "@nestjs/common";
import { InfrastructureService } from "./infrastructure.service.js";
import type { InfraItem, InfraType, InfraStatus } from "./types.js";

@Controller("infrastructure")
export class InfrastructureController {
  constructor(private readonly infraService: InfrastructureService) {}

  @Get()
  findAll(
    @Query("type") type?: InfraType,
    @Query("status") status?: InfraStatus,
  ): InfraItem[] {
    if (type) return this.infraService.findByType(type);
    if (status) return this.infraService.findByStatus(status);
    return this.infraService.findAll();
  }

  @Get("stats")
  getStats() {
    return this.infraService.getStats();
  }

  @Get(":id")
  findById(@Param("id") id: string): InfraItem | undefined {
    return this.infraService.findById(id);
  }
}