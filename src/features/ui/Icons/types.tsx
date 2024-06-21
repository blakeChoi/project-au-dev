import { SVGAttributes } from "react";

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}
