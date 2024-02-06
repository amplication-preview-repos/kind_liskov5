import { BuildingProjectCreateNestedManyWithoutAdressesInput } from "./BuildingProjectCreateNestedManyWithoutAdressesInput";
import { ConstructionCreateNestedManyWithoutAdressesInput } from "./ConstructionCreateNestedManyWithoutAdressesInput";

export type AdressCreateInput = {
  buildingProjects?: BuildingProjectCreateNestedManyWithoutAdressesInput;
  city?: string | null;
  constructions?: ConstructionCreateNestedManyWithoutAdressesInput;
  country?: string | null;
  postcode?: string | null;
  state?: string | null;
  streetname?: string | null;
};
