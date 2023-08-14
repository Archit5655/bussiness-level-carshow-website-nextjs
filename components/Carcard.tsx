"use client";
import { carprops } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import Cardetails from "./Cardetails";

interface carcardprops {
  car: carprops;
}
const Carcard = ({ car }: carcardprops) => {
    const [isopen, setisopen] = useState(false)
  const [first, setfirst] = useState("");
  const { city_mpg, drive, make, model, transmission, year } = car;
  const carrent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make},{model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carrent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={generateCarImageUrl(car)} alt="car" fill className="object-contain" />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-500">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatice" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/tire.svg"
              width={20}
              height={20}
              alt="wheel"
            />
            <p className="text-[14px]">
          {drive.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              width={20}
              height={20}
              alt="wheel"
            />
            <p className="text-[14px]">
      {city_mpg}
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
            <Button title="View more"  containerStyles="w-full py-[16px] rounded-full bg-primary-blue" 
            textstyles="text-white text-[14px] leading-[17px] font-bold"
            righticon="/right-arrow.svg"
            handleClick={()=>setisopen(true)}
            />
        </div>
      </div>
      <Cardetails isopen={isopen} closemodal={()=>setisopen(false)} car={car}  />
    </div>
  );
};

export default Carcard;
