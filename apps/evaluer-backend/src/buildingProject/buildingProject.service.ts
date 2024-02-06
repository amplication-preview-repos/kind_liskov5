import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BuildingProjectServiceBase } from "./base/buildingProject.service.base";

@Injectable()
export class BuildingProjectService extends BuildingProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
