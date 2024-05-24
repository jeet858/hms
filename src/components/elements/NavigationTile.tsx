import React, { DOMAttributes, MouseEventHandler } from "react";
interface Iprops {
  tile_text: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  active: boolean;
}
const NavigationTile: React.FunctionComponent<Iprops> = (props) => {
  return (
    <div
      className={`flex h-12 w-4/5 items-center rounded-r-full border-2 ${props.active ? "border-yellow-500 text-yellow-500" : "text-[#006B82]"} bg-white pl-[5%] text-lg font-semibold shadow-lg`}
      onClick={props.onClick}
    >
      {" "}
      {props.tile_text}
    </div>
  );
};
export default NavigationTile;
