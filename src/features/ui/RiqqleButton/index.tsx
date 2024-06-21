// components/RippleButton.tsx
import React, { MouseEvent, useRef, useState } from "react";

interface RippleButtonProps {
  children?: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

interface Ripple {
  key: number;
  style: React.CSSProperties;
}

const RippleButton = ({ children, onClick }: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const nextKey = useRef(0);

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (button) {
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      const newRipple: Ripple = {
        key: nextKey.current++,
        style: {
          width: size,
          height: size,
          top: y,
          left: x,
          position: "absolute",
          borderRadius: "50%",
          background: "rgba(0, 0, 0, 0.3)",
          transform: "scale(0)",
          animation: "ripple 300ms linear",
        },
      };

      setRipples((prevRipples) => [...prevRipples, newRipple]);
    }

    if (onClick) {
      onClick(event);
    }
  };

  const handleAnimationEnd = (key: number) => {
    setRipples((prevRipples) =>
      prevRipples.filter((ripple) => ripple.key !== key)
    );
  };

  return (
    <button
      ref={buttonRef}
      className="relative inline-block px-2 py-1 ml-2 overflow-hidden text-white rounded bg-gradient-to-r from-green-500 to-teal-500 focus:outline-none"
      onClick={createRipple}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          style={ripple.style}
          className="ripple"
          onAnimationEnd={() => handleAnimationEnd(ripple.key)}
        />
      ))}
      {children}
    </button>
  );
};

export default RippleButton;
