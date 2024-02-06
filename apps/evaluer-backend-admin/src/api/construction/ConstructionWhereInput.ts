import { AdressWhereUniqueInput } from "../adress/AdressWhereUniqueInput";
import { BuildingProjectWhereUniqueInput } from "../buildingProject/BuildingProjectWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ConstructionWhereInput = {
  adress?: AdressWhereUniqueInput;
  buildingProjects?: BuildingProjectWhereUniqueInput;
  id?: StringFilter;
};
