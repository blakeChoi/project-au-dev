import Modal, { ModalProps } from "../Modal";
import { ReactNode, useState } from "react";

export interface ModalAlertProps {
  title: ReactNode;
  isOpen: boolean;
  classNameBody?: string;
  closableBackDrop?: boolean;
  closableEscKey?: boolean;
  hasBackdrop?: boolean;
  onClose: () => void;
  message?: ReactNode;
  onClickConfirm?: () => void | Promise<void> | Promise<any>;
  buttonConfirmText?: string;
  closeOnClickConfirm?: boolean;
}

export default function ModalAlert({
  title,
  message,
  isOpen,
  buttonConfirmText,
  closeOnClickConfirm = true,
  onClickConfirm,
  onClose,
}: ModalAlertProps) {
  const images = [
    "/lettuce2/image1.png",
    "/lettuce2/image22.png",
    "/lettuce2/image3.png",
    "/lettuce2/image4.png",
    "/lettuce2/image55.png",
    "/lettuce/6.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-gray-100 rounded-lg shadow-md min-w-480px px-7 py-7">
        <div className="text-3xl font-semibold tracking-wide text-gray-800">
          {title}
        </div>
        {message && (
          <div className="mt-4 mb-4 text-lg text-gray-700">{message}</div>
        )}
        {/* Image Carousel */}
        <div className="flex">
          <button onClick={handlePrevImage}>{"<"}</button>
          <div className="flex  justify-center image-carousel w-[600px] h-[400px]">
            <img
              className="rounded-lg shadow-md"
              src={images[currentImageIndex]}
              alt="carousel"
            />
          </div>
          <button onClick={handleNextImage}>{">"}</button>
        </div>
        {/* Thumbnail Images */}
        <div className="mt-4 w-[90px] h-[90px]">
          <div className="flex gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`thumbnail-${index}`}
                onClick={() => setCurrentImageIndex(index)}
                className={`object-contain rounded-lg cursor-pointer thumbnail-image transform transition-transform duration-100 ${
                  index === currentImageIndex
                    ? "translate-y-[-3px] border border-emerald-500 border-[4px]"
                    : ""
                }`}
              />
            ))}
          </div>
        </div>
        {/* Confirm Button */}
        <div className="flex justify-center md:mt-6">
          <button
            className="w-32 h-12 text-lg rounded-md shadow-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-50"
            onClick={onClose}
          >
            {buttonConfirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
}
