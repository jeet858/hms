import React, { useState } from "react";
import CustomTable from "../tables/CustomTable";
import { FaAlignJustify } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineAdd } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

interface Iprops {
  tileone: string;
  tiletwo: string;
  children1: JSX.Element | JSX.Element[];
  children2: JSX.Element | JSX.Element[];
  activeTabProps?: "tabOne" | "tabTwo";
}

const tabTwo: React.FC<Iprops> = ({
  tileone,
  tiletwo,
  children1,
  children2,
  activeTabProps = "tabOne",
}) => {
  const [activeTab, setActiveTab] = useState<"tabOne" | "tabTwo">(
    activeTabProps,
  );

  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full flex-col rounded shadow ">
        <div className="flex space-x-1 border border-b-0 bg-blue-50">
          <button
            className={`px-4 py-2 ${activeTab === "tabOne" ? "border-white bg-white font-bold text-[#000000] " : "text-[#000000]"}`}
            onClick={() => setActiveTab("tabOne")}
          >
            <div className="flex border-[#4EA1E726]">
              <FaAlignJustify
                className={`mt-[5px] text-yellow-500 ${activeTab === "tabOne" ? "font-bold" : "text-[#070404]"}`}
              />
              <div className="ml-3 text-lg">{tileone}</div>
            </div>
          </button>
          <button
            className={`px-2 py-2 ${activeTab === "tabTwo" ? "border-y-0 border-white bg-white font-bold" : "text-gray-500"}`}
            onClick={() => setActiveTab("tabTwo")}
          >
            <div className="flex">
              <MdOutlineAdd
                className={`text-[25px] ${activeTab === "tabTwo" ? "font-bold text-yellow-500" : "text-gray-500"}`}
              />
              <div
                className={`ml-2 text-lg ${activeTab === "tabTwo" ? "font-bold text-[#287CC6]" : "text-gray-500"}`}
              >
                {tiletwo}
              </div>
            </div>
          </button>
        </div>
        <div className="h-[90%] p-4">
          {activeTab === "tabOne" && (
            <div className="">
              {/* Doctor list content goes here */}
              {/* <p>Doctor List Content</p> */}
              {children1}
            </div>
          )}
          {activeTab === "tabTwo" && (
            <div className="h-full w-full">
              {/* Add doctor content goes here */}
              {/* <p>Add Doctor Content</p> */}
              {children2}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default tabTwo;
