"use client";

import { MouseEvent, useMemo, useRef, useState } from "react";

import IconSelectArrow from "../Icons/components/SelectArrow";
import OptionList from "./OptionList.tsx";
import useDocumentClick from "@/features/hooks/useDocumentClick";

export type DropDownOption = { value: string; text: string } | string;

export interface DropDownProps {
  options: DropDownOption[];
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  onChange?: (selectedValue: string) => void;
}

export default function DropDown({
  options,
  defaultValue,
  placeholder = "Please Select Item",
  className,
  onChange,
}: DropDownProps) {
  const ref = useRef<HTMLDivElement>(null);
  const optionListRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>();
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultValue
  );
  const selectedText = useMemo<string | undefined>(() => {
    const selectedObj = options.find((option) => {
      if (typeof option === "string") {
        return option;
      }

      if (option.value === selectedValue) {
        return option;
      }
    });

    if (selectedObj) {
      return typeof selectedObj === "string" ? selectedObj : selectedObj.text;
    }
  }, [options, selectedValue]);

  useDocumentClick({
    ref,
    handler: () => setIsOpen(false),
  });

  const handleClickButton = (e: MouseEvent<HTMLAnchorElement>) => {
    setIsOpen((prevState) => !prevState);
  };

  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }

    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative w-full bg-gray-100 ${className}`}
      ref={ref}
      data-open={isOpen ? "1" : "0"}
    >
      <a
        className={`flex items-center w-full h-10 px-3 cursor-pointer rounded-lg border ${selectedValue ? "text-gray-700" : "text-gray-500"} ${isOpen ? "rounded-t-lg border-primary border-b-0" : "border-gray-400"}`}
        tabIndex={0}
        onClick={handleClickButton}
      >
        {selectedText || placeholder}
        <div className="absolute right-3.5">
          <IconSelectArrow width={12} height={12} />
        </div>
      </a>
      {isOpen && (
        <OptionList
          ref={optionListRef}
          selectedValue={selectedValue}
          options={options}
          onChange={handleChange}
          onBlurLastItem={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
