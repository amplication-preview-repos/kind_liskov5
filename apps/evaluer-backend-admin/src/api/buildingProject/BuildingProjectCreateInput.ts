import { AdressWhereUniqueInput } from "../adress/AdressWhereUniqueInput";
import { ConstructionCreateNestedManyWithoutBuildingProjectsInput } from "./ConstructionCreateNestedManyWithoutBuildingProjectsInput";

export type BuildingProjectCreateInput = {
  adress?: AdressWhereUniqueInput | null;
  construction?: ConstructionCreateNestedManyWithoutBuildingProjectsInput;
};
