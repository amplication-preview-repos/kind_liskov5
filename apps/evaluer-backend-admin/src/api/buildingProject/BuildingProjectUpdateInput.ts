import { AdressWhereUniqueInput } from "../adress/AdressWhereUniqueInput";
import { ConstructionUpdateManyWithoutBuildingProjectsInput } from "./ConstructionUpdateManyWithoutBuildingProjectsInput";

export type BuildingProjectUpdateInput = {
  adress?: AdressWhereUniqueInput | null;
  construction?: ConstructionUpdateManyWithoutBuildingProjectsInput;
};
