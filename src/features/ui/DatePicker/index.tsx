"use client";

import "react-day-picker/dist/style.css";

import { DateRange, DayPicker } from "react-day-picker";

import Image from "next/image";
import RippleButton from "../RiqqleButton";
import { format } from "date-fns";
import useDateRangeStore from "@/features/globalState/zustand/useDateRangeStore";
import { useState } from "react";

export function DatePicker() {
  const { range, setRange, resetRange } = useDateRangeStore();
  const [showPicker, setShowPicker] = useState(false);

  const handleSelect = (selectedRange: DateRange | undefined) => {
    if (selectedRange) {
      setRange(selectedRange);
      if (selectedRange.from && selectedRange.to) {
        setShowPicker(false);
      }
    }
  };

  const formatDate = (date: Date | undefined) => {
    return date ? format(date, "dd/MM/yyyy") : "";
  };

  const closePicker = () => {
    setShowPicker(false);
  };

  const today = new Date();

  return (
    <div className="relative flex items-center mt-2 mb-4 text-zinc-700">
      <div className="flex items-center space-x-1">
        <div className="flex w-[132px] p-1 bg-white border rounded">
          <Image
            className="mr-2"
            alt="calendar-icon"
            src="/calendar.svg"
            width="20"
            height="20"
          />
          <input
            type="text"
            readOnly
            value={formatDate(range?.from)}
            placeholder="start date"
            onFocus={() => setShowPicker(true)}
            className="w-24 bg-transparen"
          />
        </div>
        <Image alt="divider-icon" src="/divider_1.svg" width={15} height={4} />
        <div className="flex p-1 bg-white border rounded w-[132px]">
          <Image
            className="mr-2"
            alt="calendar-icon"
            src="/calendar.svg"
            width="20"
            height="20"
          />
          <input
            type="text"
            readOnly
            value={formatDate(range?.to)}
            placeholder="end date"
            onFocus={() => setShowPicker(true)}
            className="w-24 bg-transparent"
          />
        </div>

        <RippleButton onClick={resetRange}>Reset</RippleButton>
      </div>
      {showPicker && (
        <div
          className="absolute p-2 bg-white rounded-md shadow-md"
          style={{
            top: "calc(100% + 5px)",
            left: 0,
            zIndex: 999,
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="mt-2 ml-2 text-lg font-semibold ">
              Select the period
            </span>
            <button
              onClick={closePicker}
              className="p-1 text-gray-500 hover:text-gray-700"
            >
              <Image
                className="mt-2 mr-2"
                alt="close"
                src="/close.svg"
                width={24}
                height={24}
              />
            </button>
          </div>
          <DayPicker
            defaultMonth={today}
            mode="range"
            selected={range}
            onSelect={handleSelect}
            min={2}
            max={30}
            disabled={{
              after: today,
            }}
          />
        </div>
      )}
    </div>
  );
}
