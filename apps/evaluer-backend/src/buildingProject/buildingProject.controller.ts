import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BuildingProjectService } from "./buildingProject.service";
import { BuildingProjectControllerBase } from "./base/buildingProject.controller.base";

@swagger.ApiTags("buildingProjects")
@common.Controller("buildingProjects")
export class BuildingProjectController extends BuildingProjectControllerBase {
  constructor(
    protected readonly service: BuildingProjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
