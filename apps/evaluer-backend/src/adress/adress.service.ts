import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdressServiceBase } from "./base/adress.service.base";

@Injectable()
export class AdressService extends AdressServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
