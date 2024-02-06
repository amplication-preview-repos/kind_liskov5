import { AdressWhereUniqueInput } from "../adress/AdressWhereUniqueInput";
import { ConstructionListRelationFilter } from "../construction/ConstructionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BuildingProjectWhereInput = {
  adress?: AdressWhereUniqueInput;
  construction?: ConstructionListRelationFilter;
  id?: StringFilter;
};
