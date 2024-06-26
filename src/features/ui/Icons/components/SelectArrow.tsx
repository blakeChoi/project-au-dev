import { SvgProps } from "../types";

export default function IconSelectArrow({
  width = 6,
  height = 5,
  color = "#3B4045",
}: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 5L0.401924 0.5L5.59808 0.5L3 5Z" fill={color} />
    </svg>
  );
}
