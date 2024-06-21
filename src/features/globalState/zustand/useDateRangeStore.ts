import { DateRange } from "react-day-picker";
import { create } from "zustand";
import { initialRange } from "@/utils/initialRange";

interface DateRangeState {
  range: DateRange;
  setRange: (range: DateRange) => void;
  resetRange: () => void;
}

const useDateRangeStore = create<DateRangeState>((set) => ({
  range: initialRange,
  setRange: (range) => set({ range }),
  resetRange: () => set({ range: undefined }),
}));

export default useDateRangeStore;
