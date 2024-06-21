import { HTMLAttributes, PropsWithChildren, useEffect } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  classNameBody?: string;
  closableBackDrop?: boolean;
  closableEscKey?: boolean;
  hasBackdrop?: boolean;
  onClose: () => void;
}

export default function Modal({
  children,
  isOpen,
  hasBackdrop = true,
  className,
  classNameBody,
  closableBackDrop,
  closableEscKey,
  onClose,
}: PropsWithChildren<ModalProps>) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen && (event.key === "Escape" || event.keyCode === 27)) {
        event.preventDefault();
        onClose();
      }
    };

    if (closableEscKey) {
      window.addEventListener("keydown", handleKeyDown, true);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [closableEscKey, isOpen, onClose]);

  if (!isOpen) return null;

  const handleClickBackdrop = () => {
    if (closableBackDrop) {
      onClose();
    }
  };

  return (
    <div className='fixed top-0 left-0 z-50 w-screen h-screen'>
      {hasBackdrop && (
        <div
          className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-60'
          onClick={handleClickBackdrop}
        ></div>
      )}
      <div className='absolute z-50 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
        <div className={classNameBody}>{children}</div>
      </div>
    </div>
  );
}
