import { MouseEventHandler } from "react";



export interface custombuttonprops{
    textstyles?:string,
    righticon?:string,
    isdisabled?:boolean,

    
    title:string,
    containerStyles?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>,
    btnType?:"button" | "submit",
}
export interface SearchManufactureProps{
    manufacturer:string,
    setmanufacturer:(manufacturer:string)=>void;
}
export interface carprops{
    city_mpg:number,
class:string,
combination_mpg:number,
cylinders:number,
displacement:number,
drive:string,
fuel_type:string,
highway_mpg:number,
make:string,
model:string,
transmission:string,
year:number,
}