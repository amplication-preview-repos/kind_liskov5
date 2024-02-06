import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdressService } from "./adress.service";
import { AdressControllerBase } from "./base/adress.controller.base";

@swagger.ApiTags("adresses")
@common.Controller("adresses")
export class AdressController extends AdressControllerBase {
  constructor(
    protected readonly service: AdressService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
