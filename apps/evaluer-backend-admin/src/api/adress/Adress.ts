import { BuildingProject } from "../buildingProject/BuildingProject";
import { Construction } from "../construction/Construction";

export type Adress = {
  buildingProjects?: Array<BuildingProject>;
  city: string | null;
  constructions?: Array<Construction>;
  country: string | null;
  createdAt: Date;
  id: string;
  postcode: string | null;
  state: string | null;
  streetname: string | null;
  updatedAt: Date;
};
