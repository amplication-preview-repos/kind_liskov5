import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BuildingProjectResolverBase } from "./base/buildingProject.resolver.base";
import { BuildingProject } from "./base/BuildingProject";
import { BuildingProjectService } from "./buildingProject.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BuildingProject)
export class BuildingProjectResolver extends BuildingProjectResolverBase {
  constructor(
    protected readonly service: BuildingProjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
