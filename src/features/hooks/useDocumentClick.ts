import { RefObject, useEffect } from "react";

interface Params {
  handler: () => void;
  ref?: RefObject<HTMLElement>;
}

/**
 * document 클릭 시 이벤트 처리 hooks
 * 사용처의 ref를 전달해 클릭한 영역과 사용처의 영역이 일치하지 않은 경우만 실행
 */
export default function useDocumentClick({ handler, ref }: Params) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!ref || !ref.current || !ref.current.contains(target)) {
        handler();
      }
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [handler, ref]);
}
