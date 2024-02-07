import { HazardousSubstance as THazardousSubstance } from "../api/hazardousSubstance/HazardousSubstance";

export const HAZARDOUSSUBSTANCE_TITLE_FIELD = "id";

export const HazardousSubstanceTitle = (
  record: THazardousSubstance
): string => {
  return record.id?.toString() || String(record.id);
};
