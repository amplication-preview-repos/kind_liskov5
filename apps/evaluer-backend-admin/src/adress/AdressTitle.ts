import { Adress as TAdress } from "../api/adress/Adress";

export const ADRESS_TITLE_FIELD = "streetname";

export const AdressTitle = (record: TAdress): string => {
  return record.streetname?.toString() || String(record.id);
};
