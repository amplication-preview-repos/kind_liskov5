import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ComponentWhereInput = {
  id?: IntFilter;
  name?: StringNullableFilter;
};
