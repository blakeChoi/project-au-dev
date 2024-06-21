"use client";

import { DateChart } from "../ui/Chart/DateChart";
import { SingleDatePicker } from "../ui/SingleDatePicker";
import SubTitle from "../ui/SubTItle";
import Title from "../ui/Title";
import useModalAlertStore from "../globalState/zustand/modalAlert";

export default function Date() {
  const images = [
    "/lettuce2/image1.png",
    "/lettuce2/image22.png",
    "/lettuce2/image3.png",
    "/lettuce2/image4.png",
    "/lettuce2/image55.png",
    "/lettuce/6.png",
  ];

  const { openModalAlert } = useModalAlertStore();

  const openModal = () => {
    openModalAlert({
      title: "Lettuce Images",
      message: <>check the weight of lettuce by selecting a specific date</>,
      buttonConfirmText: "OK",
    });
  };

  return (
    <div className="relative m-auto w-fit">
      <Title title="Date" />
      <SubTitle subtitle="Check the weight of lettuce by selecting a specific date" />
      <SingleDatePicker />

      {/* Chart */}
      <div className="flex justify-center">
        <div className="w-[850px] h-[600px] bg-[#a1a1a1] flex flex-col items-center justify-center">
          <DateChart />
        </div>
      </div>
      <div className="flex h-[100px] justify-center">
        <div className="flex gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`thumbnail-${index}`}
              className={`rounded-lg cursor-pointer transform transition-transform duration-100 hover:translate-y-[-3px] hover:shadow-lg rounded-lg`}
              onClick={openModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
