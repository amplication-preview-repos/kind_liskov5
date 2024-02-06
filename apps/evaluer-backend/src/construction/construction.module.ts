import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConstructionModuleBase } from "./base/construction.module.base";
import { ConstructionService } from "./construction.service";
import { ConstructionController } from "./construction.controller";
import { ConstructionResolver } from "./construction.resolver";

@Module({
  imports: [ConstructionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConstructionController],
  providers: [ConstructionService, ConstructionResolver],
  exports: [ConstructionService],
})
export class ConstructionModule {}
