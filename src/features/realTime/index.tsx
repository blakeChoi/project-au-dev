"use client";

import React, { useState } from "react";

import Image from "next/image";
import RippleButton from "../ui/RiqqleButton";
import SubTitle from "../ui/SubTItle";
import Title from "../ui/Title";
import useGetImage from "../globalState/reactQueryHooks/useGetRealTimeImage";
import useModalAlertStore from "../globalState/zustand/modalAlert";

type indexType = {
  [index: string]: any;
};

export default function RealTime() {
  const { openModalAlert } = useModalAlertStore();

  const openModal = () => {
    openModalAlert({
      title: "Lettuce Images",
      message: <>Check the real-time lettuce images</>,
      buttonConfirmText: "OK",
    });
  };

  // const image: indexType = useGetImage();

  const images = [
    "/lettuce2/image1.png",
    "/lettuce2/image22.png",
    "/lettuce2/image3.png",
    "/lettuce2/image4.png",
    "/lettuce2/image55.png",
    "/lettuce2/image6.png",
  ];

  return (
    <div className="relative w-[921px] m-auto">
      <Title title="Real Time" />
      <SubTitle subtitle="Check the real-time lettuce images" />
      <div className="flex items-center mt-2 mb-4 text-zinc-600">
        <p className="mr-2.5">Last Updated At</p>
        <p className="mr-2.5">May 22, 2024</p>
        <Image alt="divider-icon" src="/divider.svg" width={3} height={3} />
        <p className="ml-2.5 mr-2.5">AM 12:00</p>
      </div>
      <section className="grid grid-cols-3 gap-[20px]">
        <div
          className="w-[292px] h-[219px] shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg rounded-xl"
          onClick={openModal}
        >
          <div className="w-[292px] h-[219px] overflow-hidden rounded-xl">
            <Image
              src={"/lettuce2/image1.png"}
              alt={`Lettuce Image`}
              width={292}
              height={219}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex relative font-bold text-xs w-[52px] h-[22px] justify-center items-center rounded-2xl text-white bg-gradient-to-r from-green-500 to-teal-500 bottom-[30px] left-[230px]">
            {`CAM 1`}
          </div>
        </div>
        <div
          className="w-[292px] h-[219px]  shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg rounded-xl"
          onClick={openModal}
        >
          <div className="w-[292px] h-[219px] overflow-hidden rounded-xl">
            <Image
              src={"/lettuce2/image22.png"}
              alt={`Lettuce Image`}
              width={292}
              height={219}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex relative font-bold text-xs w-[52px] h-[22px] justify-center items-center rounded-2xl text-white bg-gradient-to-r from-green-500 to-teal-500 bottom-[30px] left-[230px]">
            {`CAM 2`}
          </div>
        </div>
        <div
          className="w-[292px] h-[219px] shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg rounded-xl"
          onClick={openModal}
        >
          <div className="w-[292px] h-[219px] overflow-hidden rounded-xl">
            <Image
              src={"/lettuce2/image3.png"}
              alt={`Lettuce Image`}
              width={292}
              height={219}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex relative font-bold text-xs w-[52px] h-[22px] justify-center items-center rounded-2xl text-white bg-gradient-to-r from-green-500 to-teal-500 bottom-[30px] left-[230px]">
            {`CAM 3`}
          </div>
        </div>
        <div
          className="w-[292px] h-[219px] shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg rounded-xl"
          onClick={openModal}
        >
          <div className="w-[292px] h-[219px] overflow-hidden rounded-xl">
            <Image
              src={"/lettuce2/image4.png"}
              alt={`Lettuce Image`}
              width={292}
              height={219}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex relative font-bold text-xs w-[52px] h-[22px] justify-center items-center rounded-2xl text-white bg-gradient-to-r from-green-500 to-teal-500 bottom-[30px] left-[230px]">
            {`CAM 4`}
          </div>
        </div>
        <div
          className="w-[292px] h-[219px] shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg rounded-xl"
          onClick={openModal}
        >
          <div className="w-[292px] h-[219px] overflow-hidden rounded-xl">
            <Image
              src={"/lettuce2/image55.png"}
              alt={`Lettuce Image`}
              width={292}
              height={219}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex relative font-bold text-xs w-[52px] h-[22px] justify-center items-center rounded-2xl text-white bg-gradient-to-r from-green-500 to-teal-500 bottom-[30px] left-[230px]">
            {`CAM 5`}
          </div>
        </div>
        <div
          className="w-[292px] h-[219px] transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg rounded rounded-xl"
          onClick={openModal}
        >
          <div className="w-[292px] h-[219px] overflow-hidden rounded-xl">
            <Image
              src={"/lettuce/6.png"}
              alt={`Lettuce Image`}
              width={292}
              height={219}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex relative font-bold text-xs w-[52px] h-[22px] justify-center items-center rounded-2xl text-white bg-gradient-to-r from-green-500 to-teal-500 bottom-[30px] left-[230px]">
            {`CAM 6`}
          </div>
        </div>
      </section>
      {/* {image.data ? (
        <Image
          src={URL.createObjectURL(image.data)}
          alt="Lettuce Image"
          width={100}
          height={70}
        />
      ) : null} */}
      {/* {image.isLoading ? (
        <div>Loading...</div>
      ) : image.isError ? (
        <div>Error fetching images</div>
      ) : (
        <div className='grid grid-cols-3 gap-[20px]'>
          {[...Array(6)].map((_, index) => (
            <div key={index} className='w-[292px] h-[219px] shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg' onClick={openModal}>
              {image.data && image.data[index] ? (
                <Image
                  src={URL.createObjectURL(image.data[index])}
                  alt={`Lettuce Image ${index + 1}`}
                  width={100}
                  height={70}
                />
              ) : (
                <button className='w-[292px] h-[219px] shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg'>Image Not Found</button>
              )}
              <div className='flex relative text-xs w-[52px] h-[22px] justify-center items-center rounded-2xl text-white bg-gradient-to-r from-green-500 to-teal-500 bottom-[30px] left-[230px]'>
                {`CAM ${index + 1}`}
              </div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}
