import { Adress } from "../adress/Adress";
import { BuildingProject } from "../buildingProject/BuildingProject";

export type Construction = {
  adress?: Adress | null;
  buildingProjects?: BuildingProject | null;
  createdAt: Date;
  id: number;
  updatedAt: Date;
};
