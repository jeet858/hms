import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleLine } from "react-icons/ri";

const RoomDetailsTableComponent: React.FunctionComponent = () => {
  const headers = [
    "Room No.",
    "Patient Name",
    "Bed No.",
    "Patient ID",
    "Floor",
    "Admission Date",
    "Room Type",
    "Status",
    "Rate Per Bed",
  ];
  const data = [
    [
      "1",
      "Deepak Mazumder",
      "10101",
      "PT101",
      "First",
      "Jan - 15 -2024",
      "General Ward",
      "Occupied",
      "999.00",
    ],
    [
      "1",

      "Deepak Mazumder",
      "10101",
      "PT101",
      "First",
      "Jan - 15 -2024",
      "General Ward",
      "Occupied",
      "999.00",
    ],
    [
      "1",

      "Deepak Mazumder",
      "10101",
      "PT101",
      "First",
      "Jan - 15 -2024",
      "General Ward",
      "Occupied",
      "999.00",
    ],
    [
      "1",

      "Deepak Mazumder",
      "10101",
      "PT101",
      "First",
      "Jan - 15 -2024",
      "General Ward",
      "Occupied",
      "999.00",
    ],
    [
      "1",

      "Deepak Mazumder",
      "10101",
      "PT101",
      "First",
      "Jan - 15 -2024",
      "General Ward",
      "Occupied",
      "999.00",
    ],
    [
      "1",

      "Deepak Mazumder",
      "10101",
      "PT101",
      "First",
      "Jan - 15 -2024",
      "General Ward",
      "Occupied",
      "999.00",
    ],
    [
      "1",

      "Deepak Mazumder",
      "10101",
      "PT101",
      "First",
      "Jan - 15 -2024",
      "General Ward",
      "Occupied",
      "999.00",
    ],
    [
      "1",

      "Deepak Mazumder",
      "10101",
      "PT101",
      "First",
      "Jan - 15 -2024",
      "General Ward",
      "Occupied",
      "999.00",
    ],
    [
      "1",

      "Deepak Mazumder",
      "10101",
      "PT101",
      "First",
      "Jan - 15 -2024",
      "General Ward",
      "Occupied",
      "999.00",
    ],
    [
      "1",

      "Deepak Mazumder",
      "10101",
      "PT101",
      "First",
      "Jan - 15 -2024",
      "General Ward",
      "Occupied",
      "999.00",
    ],
    [
      "1",

      "Deepak Mazumder",
      "10101",
      "PT101",
      "First",
      "Jan - 15 -2024",
      "General Ward",
      "Occupied",
      "999.00",
    ],
    [
      "1",

      "Deepak Mazumder",
      "10101",
      "PT101",
      "First",
      "Jan - 15 -2024",
      "General Ward",
      "Occupied",
      "999.00",
    ],
  ];
  const getNewBadgeColor = (index: any) => {
    switch (index % 9) {
      case 0:
        return "w-[8%]";
      case 1:
        return "w-[15%]";
      case 2:
        return "w-[8%]";
      case 3:
        return "w-[10%]";
      case 4:
        return "w-[10%]";
      case 5:
        return "w-[15%]";
      case 6:
        return "w-[10%]";
      case 7:
        return "w-[10%]";
      case 8:
        return "w-[12%]";
      case 9:
        return "w-[9%]";

      default:
        return "w-[5%]";
    }
  };
  const [entriesToShow, setEntriesToShow] = useState(5);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleEntriesToShow = (num: number) => {
    setEntriesToShow(num);
    setDropdownOpen(false);
  };
  return (
    <div className=" flex flex-col rounded-lg border  border-[#003A47] bg-[#F2F2F2] p-2">
      <div className="h-[50vh] overflow-scroll">
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            {headers.map((header, index) => (
              <div
                key={index}
                className={`flex h-[2rem] w-full items-center justify-between bg-white px-2  text-xs  font-semibold text-[#888888] ${getNewBadgeColor(index)}`}
              >
                <span>{header}</span>
                <span className="flex flex-col gap-0 ">
                  {header != "Room No." && (
                    <>
                      <span>
                        <AiFillCaretUp />
                      </span>
                      <span>
                        <AiFillCaretDown />
                      </span>
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>

          {data.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1 ">
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className={`flex h-[2rem] w-full items-center justify-start bg-white px-2  text-[12px] font-medium text-[#444444] ${getNewBadgeColor(cellIndex)}`}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full items-center justify-between text-[#7E7E7E]">
        <div className="flex items-center gap-3">
          <span>Show</span>
          <div className="relative">
            <button
              className="flex w-[4rem] items-center justify-between rounded-md bg-white p-2"
              onClick={toggleDropdown}
            >
              <span>{entriesToShow}</span>
              <span>
                {dropdownOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </span>
            </button>
            {dropdownOpen && (
              <div className="absolute bottom-8 left-0 w-[4rem] rounded-md bg-white shadow-lg">
                {[5, 10, 15, 20].map((num) => (
                  <div
                    key={num}
                    onClick={() => handleEntriesToShow(num)}
                    className="cursor-pointer p-2 hover:bg-gray-100"
                  >
                    {num}
                  </div>
                ))}
              </div>
            )}
          </div>

          <span>entries</span>
        </div>
        <div className="flex items-center gap-3">
          <span>
            <RiArrowLeftDoubleFill />
          </span>
          <span>
            <MdKeyboardArrowLeft />
          </span>
          <span>1</span>
          <span>2</span>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <span>
            <RiArrowRightDoubleLine />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsTableComponent;
