import { Adress } from "../adress/Adress";
import { Construction } from "../construction/Construction";

export type BuildingProject = {
  adress?: Adress | null;
  construction?: Array<Construction>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
