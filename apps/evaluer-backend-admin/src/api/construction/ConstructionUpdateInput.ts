import { AdressWhereUniqueInput } from "../adress/AdressWhereUniqueInput";
import { BuildingProjectWhereUniqueInput } from "../buildingProject/BuildingProjectWhereUniqueInput";

export type ConstructionUpdateInput = {
  adress?: AdressWhereUniqueInput | null;
  buildingProjects?: BuildingProjectWhereUniqueInput | null;
};
