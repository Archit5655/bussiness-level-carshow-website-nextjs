"use client";
import React from "react";
import { title } from 'process';
import { custombuttonprops } from "@/types";

const Button = ({title,containerStyles,handleClick,btnType}:custombuttonprops) => {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  );
};

export default Button;
