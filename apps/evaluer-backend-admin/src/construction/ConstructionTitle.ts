import { Construction as TConstruction } from "../api/construction/Construction";

export const CONSTRUCTION_TITLE_FIELD = "id";

export const ConstructionTitle = (record: TConstruction): string => {
  return record.id?.toString() || String(record.id);
};
