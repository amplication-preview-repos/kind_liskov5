import { SortOrder } from "../../util/SortOrder";

export type AdressOrderByInput = {
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postcode?: SortOrder;
  state?: SortOrder;
  streetname?: SortOrder;
  updatedAt?: SortOrder;
};
