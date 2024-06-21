import { RefObject, useState, useLayoutEffect } from "react";
import useResizeObserver from "@react-hook/resize-observer";

export default function useSize(target: RefObject<HTMLDivElement>) {
  const [size, setSize] = useState<DOMRect>();

  useLayoutEffect(() => {
    setSize(target.current?.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
}
