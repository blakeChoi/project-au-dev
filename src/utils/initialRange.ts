import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

export const initialRange: DateRange = {
  from: addDays(new Date(), -6),
  to: new Date(),
};
