import { PeriodChart } from "../ui/Chart/PeriodChart";
import { DatePicker } from "../ui/DatePicker";
import DropDown from "../ui/DropDown";
import SubTitle from "../ui/SubTItle";
import Title from "../ui/Title";
import { CATEGORY_OPTIONS } from "./constants";

export default function PeriodContainer() {
  return (
    <div className="relative m-auto w-fit">
      <Title title="Period" />
      <SubTitle subtitle="Check the fresh weight, LAI of lettuce by selecting a specific period" />
      <div className="flex items-center">
        <DatePicker />
        <DropDown
          className="w-[100px] ml-2 absolute bottom-1"
          placeholder="Select"
          defaultValue={CATEGORY_OPTIONS[0]?.value}
          options={CATEGORY_OPTIONS}
        />
      </div>
      <div className="flex justify-center">
        <div className=" mt-4 w-[1200px] h-[600px] bg-[#a1a1a1] flex flex-col items-center justify-center">
          <PeriodChart />
        </div>
      </div>
    </div>
  );
}
