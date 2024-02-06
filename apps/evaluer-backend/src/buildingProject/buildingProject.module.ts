import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BuildingProjectModuleBase } from "./base/buildingProject.module.base";
import { BuildingProjectService } from "./buildingProject.service";
import { BuildingProjectController } from "./buildingProject.controller";
import { BuildingProjectResolver } from "./buildingProject.resolver";

@Module({
  imports: [BuildingProjectModuleBase, forwardRef(() => AuthModule)],
  controllers: [BuildingProjectController],
  providers: [BuildingProjectService, BuildingProjectResolver],
  exports: [BuildingProjectService],
})
export class BuildingProjectModule {}
