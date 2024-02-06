import { AdressWhereUniqueInput } from "../adress/AdressWhereUniqueInput";
import { BuildingProjectWhereUniqueInput } from "../buildingProject/BuildingProjectWhereUniqueInput";

export type ConstructionCreateInput = {
  adress?: AdressWhereUniqueInput | null;
  buildingProjects?: BuildingProjectWhereUniqueInput | null;
};
