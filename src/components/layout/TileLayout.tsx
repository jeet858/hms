import React, { useState } from "react";
import CustomTable from "../tables/CustomTable";
import { FaAlignJustify } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineAdd } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import AddDoctorForm from "../form/AddDoctorForm";

interface Iprops {
  tileone: string;
  tiletwo: string;
  children1: JSX.Element | JSX.Element[];
  children2: JSX.Element | JSX.Element[];
}

const AddDoctor: React.FC<Iprops> = (props) => {

  const [activeTab, setActiveTab] = useState<"doctorList" | "addDoctor">(
    "doctorList",
  );

  return (
    <div className="w-full h-full">
      <div className="rounded border-2 w-full flex flex-col h-fit border-[#00000040] shadow">
        <div className="bg-blue-50 border border-white flex space-x-1">
          <button
            className={`px-4 py-2 ${activeTab === "doctorList" ? "font-bold text-[#000000] bg-white border-white " : "text-[#000000]"}`}
            onClick={() => setActiveTab("doctorList")}
          >
            <div className="flex border-[#4EA1E726]">
              <FaAlignJustify className={`mt-[5px] text-yellow-500 ${activeTab === "doctorList" ? "font-bold" : "text-[#070404]"}`} />
              <div className="ml-3 text-lg">{props.tileone}</div>
            </div>
          </button>
          <button
            className={`px-2 py-2 ${activeTab === "addDoctor" ? "font-bold bg-white border-white border-y-0" : "text-gray-500"}`}
            onClick={() => setActiveTab("addDoctor")}
          >
            <div className="flex">
              <MdOutlineAdd className={`text-[25px] ${activeTab === "addDoctor" ? "font-bold text-yellow-500" : "text-gray-500"}`} />
              <div className={`ml-2 text-lg ${activeTab === "addDoctor" ? "font-bold text-[#287CC6]" : "text-gray-500"}`}>{props.tiletwo}</div>
            </div>
          </button>
        </div>
        <div className="p-4 h-[90%]">
          {activeTab === "doctorList" && (
            <div className="">
              {/* Doctor list content goes here */}
              {/* <p>Doctor List Content</p> */}
              {props.children1}
            </div>
          )}
          {activeTab === "addDoctor" && (
            <div className="w-full h-full">
              {/* Add doctor content goes here */}
              {/* <p>Add Doctor Content</p> */}
              {props.children2}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;