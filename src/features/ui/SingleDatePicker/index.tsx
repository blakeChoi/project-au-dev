"use client";

import "react-day-picker/dist/style.css";

import { DayPicker } from "react-day-picker";
import Image from "next/image";
import RippleButton from "../RiqqleButton";
import { format } from "date-fns";
import { useState } from "react";

export function SingleDatePicker() {
  const today = new Date();
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(today);
  const [inputValue, setInputValue] = useState(format(today, "MM/dd/yyyy"));

  const handleSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setInputValue(format(date, "MM/dd/yyyy"));
    }
  };

  const closePicker = () => {
    setShowPicker(false);
  };

  const resetRange = () => {
    setSelectedDate(today);
    setInputValue(format(today, "MM/dd/yyyy"));
  };

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
            value={inputValue}
            onFocus={() => setShowPicker(true)}
            className="w-24 bg-transparent"
          />
        </div>
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
            <span className="mt-2 ml-2 text-lg font-semibold">
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
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
          />
        </div>
      )}

      <RippleButton onClick={resetRange}>Reset</RippleButton>
    </div>
  );
}
