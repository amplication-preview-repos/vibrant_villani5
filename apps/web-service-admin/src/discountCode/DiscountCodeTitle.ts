import { DiscountCode as TDiscountCode } from "../api/discountCode/DiscountCode";

export const DISCOUNTCODE_TITLE_FIELD = "id";

export const DiscountCodeTitle = (record: TDiscountCode): string => {
  return record.id?.toString() || String(record.id);
};
