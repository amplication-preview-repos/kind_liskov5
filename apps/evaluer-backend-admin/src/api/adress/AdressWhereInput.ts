import { BuildingProjectListRelationFilter } from "../buildingProject/BuildingProjectListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ConstructionListRelationFilter } from "../construction/ConstructionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdressWhereInput = {
  buildingProjects?: BuildingProjectListRelationFilter;
  city?: StringNullableFilter;
  constructions?: ConstructionListRelationFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  postcode?: StringNullableFilter;
  state?: StringNullableFilter;
  streetname?: StringNullableFilter;
};
