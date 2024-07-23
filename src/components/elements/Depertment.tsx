import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Depertment: React.FC = () => {
  const [deptName, setDeptName] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState("");

  const handelDeptSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputVal.length < 1) {
      alert("Department name cannot be empty");
      return;
    }
    setDeptName([...deptName, inputVal]);
    setInputVal("");
  };

  return (
    <div className="flex h-full w-full flex-row">
      <div className="h-full w-[55%]">
        <div className="w-full p-6 font-lato ">
          <span className="text-[20px][22.38px] mb-4 flex w-fit items-start border-b-4 border-yellow-400 font-sansation font-bold">
            Add Department
          </span>
          {/* <hr className="border-yellow-500 mb-6"> */}
          <form>
            <div className="required mb-4 flex flex-row justify-between">
              <label
                htmlFor="department"
                className="flex items-center align-middle font-semibold text-gray-700"
              >
                Department
              </label>
              <input
                type="text"
                value={inputVal}
                id="department"
                name="department"
                placeholder="Enter the department name"
                className=" h-[80%] w-[60%] border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onChange={(e) => setInputVal(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="submit"
                className=" bg-[#FFB800] px-4 py-2 w-24"
                onClick={handelDeptSubmit}
              >
                SAVE
              </button>
              <button
                type="button"
                className="bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 w-24"
                onClick={() => setInputVal("")}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-fit max-h-full w-[45%] overflow-y-scroll rounded-sm bg-[#fff4d4] p-[2%]">
        <p className="font-sansation text-[24px]/[26.86px] font-normal text-[#7E7E7E] ">
          Depertment List
        </p>
        <div className="">
          <div className="mt-[2%] flex h-10 w-full flex-row bg-transparent">
            <div className="flex h-full w-[25%] items-center justify-center border-2 border-[#fff4d4] bg-white">
              Serial
            </div>
            <div className="flex h-full w-[50%] items-center justify-center  border-2 border-[#fff4d4] bg-white">
              Depertname
            </div>
            <div className="flex h-full w-[25%] items-center justify-center  border-2 border-[#fff4d4] bg-white">
              Action
            </div>
          </div>
          {deptName.map((item, index) => {
            return (
              <div
                className="flex h-10 w-full flex-row bg-transparent"
                key={index}
              >
                <div className="flex h-full w-[25%] items-center justify-center border-2 border-[#fff4d4] bg-white">
                  {index + 1}
                </div>
                <div className="flex h-full w-[50%] items-center justify-center  border-2 border-[#fff4d4] bg-white">
                  {item}
                </div>
                <div className="flex h-full w-[25%] items-center justify-evenly  border-2 border-[#fff4d4] bg-white">
                  <FaEdit/>
                  <MdDelete/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Depertment;
