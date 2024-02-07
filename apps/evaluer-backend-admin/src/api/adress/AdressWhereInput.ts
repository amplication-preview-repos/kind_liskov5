import { BuildingProjectListRelationFilter } from "../buildingProject/BuildingProjectListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ConstructionListRelationFilter } from "../construction/ConstructionListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type AdressWhereInput = {
  buildingProjects?: BuildingProjectListRelationFilter;
  city?: StringNullableFilter;
  constructions?: ConstructionListRelationFilter;
  country?: StringNullableFilter;
  id?: IntFilter;
  postcode?: StringNullableFilter;
  state?: StringNullableFilter;
  streetname?: StringNullableFilter;
};
