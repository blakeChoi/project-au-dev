import { format } from "date-fns";

type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};

export const getXAxisData = (range: DateRange): string[] => {
  if (!range || !range.from || !range.to) return [];

  const dateArray: string[] = [];
  let currentDate = new Date(range.from);

  while (currentDate <= range.to) {
    dateArray.push(format(currentDate, "dd/MM/yyyy"));
    currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
  }

  return dateArray;
};
