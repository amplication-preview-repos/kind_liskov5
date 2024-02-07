import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HazardousSubstanceModuleBase } from "./base/hazardousSubstance.module.base";
import { HazardousSubstanceService } from "./hazardousSubstance.service";
import { HazardousSubstanceController } from "./hazardousSubstance.controller";
import { HazardousSubstanceResolver } from "./hazardousSubstance.resolver";

@Module({
  imports: [HazardousSubstanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [HazardousSubstanceController],
  providers: [HazardousSubstanceService, HazardousSubstanceResolver],
  exports: [HazardousSubstanceService],
})
export class HazardousSubstanceModule {}
