import { BuildingProjectWhereInput } from "./BuildingProjectWhereInput";
import { BuildingProjectOrderByInput } from "./BuildingProjectOrderByInput";

export type BuildingProjectFindManyArgs = {
  where?: BuildingProjectWhereInput;
  orderBy?: Array<BuildingProjectOrderByInput>;
  skip?: number;
  take?: number;
};
