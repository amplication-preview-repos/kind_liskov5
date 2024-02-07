import { AdressWhereUniqueInput } from "../adress/AdressWhereUniqueInput";
import { BuildingProjectWhereUniqueInput } from "../buildingProject/BuildingProjectWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type ConstructionWhereInput = {
  adress?: AdressWhereUniqueInput;
  buildingProjects?: BuildingProjectWhereUniqueInput;
  id?: IntFilter;
};
