import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdressModuleBase } from "./base/adress.module.base";
import { AdressService } from "./adress.service";
import { AdressController } from "./adress.controller";
import { AdressResolver } from "./adress.resolver";

@Module({
  imports: [AdressModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdressController],
  providers: [AdressService, AdressResolver],
  exports: [AdressService],
})
export class AdressModule {}
