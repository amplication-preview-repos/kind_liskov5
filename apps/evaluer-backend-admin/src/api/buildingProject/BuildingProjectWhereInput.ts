import { AdressWhereUniqueInput } from "../adress/AdressWhereUniqueInput";
import { ConstructionListRelationFilter } from "../construction/ConstructionListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type BuildingProjectWhereInput = {
  adress?: AdressWhereUniqueInput;
  construction?: ConstructionListRelationFilter;
  id?: IntFilter;
};
