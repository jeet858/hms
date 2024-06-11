import React, { useState } from "react";
import CustomTable from "../tables/CustomTable";
import { FaAlignJustify } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineAdd } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

interface Iprops {
  tileone: string;
  tiletwo: string;
}

const AddDoctor: React.FC<Iprops> = (props) => {
  const headers = [
    "ID",
    "Name",
    "Gender",
    "Specialization",
    "Department",
    "ContactNumber",
    "EmailId",
    "Timings",
    "Days",
  ];

  const data = [
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: 1,
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
  ];

  const [activeTab, setActiveTab] = useState<"doctorList" | "addDoctor">(
    "doctorList",
  );

  return (
    <div className="p-4">
      <div className="rounded border-2 border-[#00000040] shadow">
        <div className=" bg-blue-50 border flex space-x-1">
          <button
            className={`px-4 py-2 ${activeTab === "doctorList" ? "font-bold text-[#000000] bg-white border-white" : "text-[#000000]"}`}
            onClick={() => setActiveTab("doctorList")}
          >
            <div className="flex border-[#4EA1E726]">
              <FaAlignJustify className={`mt-[5px] text-yellow-500 ${activeTab === "doctorList" ? "font-bold" : "text-[#000000]"}`} />
              <div className="ml-2 text-lg">{props.tileone}</div>
            </div>
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "addDoctor" ? "font-bold bg-white border-white border-y-0" : "text-gray-500"}`}
            onClick={() => setActiveTab("addDoctor")}
          >
            <div className="flex">
              <MdOutlineAdd className={`text-[25px] ${activeTab === "addDoctor" ? "font-bold text-yellow-500" : "text-gray-500"}`} />
              <div className={`ml-2 text-lg ${activeTab === "addDoctor" ? "font-bold text-[#287CC6]" : "text-gray-500"}`}>{props.tiletwo}</div>
            </div>
          </button>
        </div>

        <div className="p-4">
          {activeTab === "doctorList" && (
            <div>
              {/* Doctor list content goes here */}
              {/* <p>Doctor List Content</p> */}
              <CustomTable headers={headers} data={data} />
            </div>
          )}
          {activeTab === "addDoctor" && (
            <div>
              {/* Add doctor content goes here */}
              <p>Add Doctor Content</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
