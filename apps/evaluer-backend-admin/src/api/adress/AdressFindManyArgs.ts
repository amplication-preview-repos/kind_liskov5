import { AdressWhereInput } from "./AdressWhereInput";
import { AdressOrderByInput } from "./AdressOrderByInput";

export type AdressFindManyArgs = {
  where?: AdressWhereInput;
  orderBy?: Array<AdressOrderByInput>;
  skip?: number;
  take?: number;
};
