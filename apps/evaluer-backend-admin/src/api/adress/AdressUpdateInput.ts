import { BuildingProjectUpdateManyWithoutAdressesInput } from "./BuildingProjectUpdateManyWithoutAdressesInput";
import { ConstructionUpdateManyWithoutAdressesInput } from "./ConstructionUpdateManyWithoutAdressesInput";

export type AdressUpdateInput = {
  buildingProjects?: BuildingProjectUpdateManyWithoutAdressesInput;
  city?: string | null;
  constructions?: ConstructionUpdateManyWithoutAdressesInput;
  country?: string | null;
  postcode?: string | null;
  state?: string | null;
  streetname?: string | null;
};
