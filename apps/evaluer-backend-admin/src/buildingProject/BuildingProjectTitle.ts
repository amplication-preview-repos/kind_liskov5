import { BuildingProject as TBuildingProject } from "../api/buildingProject/BuildingProject";

export const BUILDINGPROJECT_TITLE_FIELD = "id";

export const BuildingProjectTitle = (record: TBuildingProject): string => {
  return record.id?.toString() || String(record.id);
};
