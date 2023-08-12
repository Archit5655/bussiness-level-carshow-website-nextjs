import { MouseEventHandler } from "react";



export interface custombuttonprops{
    title:string,
    containerStyles?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>,
    btnType?:"button" | "submit",
}
export interface SearchManufactureProps{
    manufacturer:string,
    setmanufacturer:(manufacturer:string)=>void;
}