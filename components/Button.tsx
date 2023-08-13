"use client";
import React from "react";
import { title } from 'process';
import { custombuttonprops } from "@/types";
import Image from "next/image";

const Button = ({title,containerStyles,handleClick,btnType,textstyles,
  righticon,
  isdisabled}:custombuttonprops) => {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1 ${textstyles}`}>{title}</span>
        {righticon && (
          <div className="relative w-6 h-6">
            <Image src={righticon} fill alt="icon" className="object-contain"/>

          </div>
        )}
      </button>
    </div>
  );
};

export default Button;
