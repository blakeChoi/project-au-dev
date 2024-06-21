import cn from "classnames";
import { HTMLAttributes, forwardRef, useEffect, useRef } from "react";
import { DropDownProps } from "..";

interface Props extends Pick<DropDownProps, "onChange" | "options"> {
  selectedValue?: string;
  onBlurLastItem?: () => void;
}

interface OptionProps
  extends Pick<Props, "onBlurLastItem">,
    Omit<HTMLAttributes<HTMLAnchorElement>, "value" | "onClick"> {
  value: string;
  text?: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const OptionList = forwardRef<HTMLDivElement, Props>(
  ({ selectedValue, options, onChange, onBlurLastItem }, ref) => {
    const optionListRef = useRef<HTMLUListElement>(null);
    const selectedRef = useRef<HTMLAnchorElement>(null);

    const handleClickItem = (value: string) => {
      if (onChange) {
        onChange(value);
      }
    };

    useEffect(() => {
      if (optionListRef.current && selectedRef.current) {
        const selectedRect = selectedRef.current.getBoundingClientRect();
        const scrollableRect = optionListRef.current.getBoundingClientRect();

        if (
          selectedRect.top < scrollableRect.top ||
          selectedRect.bottom > scrollableRect.bottom
        ) {
          optionListRef.current.scrollTop =
            selectedRef.current.offsetTop - scrollableRect.height / 2 + 50;
        }
      }
    }, [optionListRef, selectedRef]);

    return (
      <div
        className="absolute left-0 z-20 w-full p-1 overflow-auto bg-gray-100 border border-t-0 rounded-b-lg top-12 border-primary"
        ref={ref}
      >
        <ul className="overflow-auto max-h-40" ref={optionListRef}>
          {options.map((item, index) => (
            <li
              key={typeof item === "string" ? item : item.value}
              className="p-1.5 list-none"
            >
              <Option
                ref={selectedValue === item ? selectedRef : null}
                value={typeof item === "string" ? item : item.value}
                text={typeof item === "string" ? item : item.text}
                selected={
                  typeof item === "string"
                    ? selectedValue === item
                    : selectedValue === item.value
                }
                onClick={handleClickItem}
                onBlur={
                  options.length - 1 === index ? onBlurLastItem : undefined
                }
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

const Option = forwardRef<HTMLAnchorElement, OptionProps>(
  ({ value, text, selected, onClick, onBlur, ...props }, ref) => {
    return (
      <a
        ref={ref}
        tabIndex={0}
        className={cn(
          "flex items-center w-full h-12 px-2 rounded-lg text-gray-700 hover:bg-gray-200",
          { "font-bold bg-gray-200": selected }
        )}
        onClick={() => onClick(value)}
        onBlur={onBlur}
        {...props}
      >
        {text ?? value}
      </a>
    );
  }
);

Option.displayName = "Option";
OptionList.displayName = "OptionList";

export default OptionList;
