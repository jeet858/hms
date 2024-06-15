import React, { useState } from "react";
import { DashboardTemplate } from "~/components";
import { RiMenuFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import RoomDetailsTableComponent from "~/components/room/RoomDetailsTableComponent";
import AddRoomComponent from "~/components/room/AddRoomComponent";
const roomdetails: React.FunctionComponent = () => {
  const roomdetails = [
    { name: "Doctor", number: "22" },
    { name: "Patient", number: "13400" },
    { name: "Nurse", number: "107" },
    { name: "Pharmacist", number: "35" },
    { name: "Laboratorist", number: "140" },
    { name: "Accountant", number: "7" },
  ];
  const getNewBadgeColor = (index: any) => {
    switch (index % 5) {
      case 0:
        return "text-[#0E8803]";
      case 1:
        return "text-[#CC0E0E]";
      case 2:
        return "text-[#0E8803]";
      case 3:
        return "text-[#287CC6]";
      case 4:
        return "text-[#FFB800]";
      case 5:
        return "text-[#F36562]";

      default:
        return "text-[#0E8803]";
    }
  };
  const [showAddRoom, setShowAddRoom] = useState(false);
  return (
    <DashboardTemplate active_tile="Doctors">
      <div className="flex w-full flex-col gap-8  p-4">
        <div className="flex w-full flex-row items-center justify-between">
          <span className="text-3xl font-medium text-[#000000CC]">
            Manage Room
          </span>
          <div className="flex gap-4">
            {roomdetails.map((room, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className={`flex flex-col items-center justify-center gap-2 px-2`}
                >
                  <span className="text-xl font-medium text-[#2E2E2EB0]">
                    {room.name}
                  </span>
                  <span
                    className={`text-2xl font-bold ${getNewBadgeColor(index)}`}
                  >
                    {room.number}
                  </span>
                </div>
                {index !== roomdetails.length - 1 && (
                  <div className="h-[3rem] w-[1px] bg-[#00000073]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 border-2 border-[#00000040]">
          <div className=" flex flex-row gap-4 bg-[#4EA1E726] text-xl  font-semibold">
            <button
              onClick={() => setShowAddRoom(false)}
              className={`flex items-center gap-2 p-2 ${showAddRoom ? "bg-transparent text-[#00000073]" : "bg-white text-black"}`}
            >
              <span
                className={`font-semibold  ${showAddRoom ? "text-[#00000073]" : "text-[#FFB800]"}`}
              >
                <RiMenuFill />
              </span>
              <span>Room Master</span>
            </button>
            <button
              onClick={() => setShowAddRoom(true)}
              className={`flex items-center gap-2 p-2  ${showAddRoom ? "bg-white text-[#287CC6]" : "bg-transparent text-[#00000073]"}`}
            >
              <span
                className={`${showAddRoom ? "text-[#FFB800]" : "text-[00000073]"}`}
              >
                <FaPlus />
              </span>
              <span>Add Room</span>
            </button>
          </div>
          <div className="p-3">
            <div className=" ">
              <>
                {/* Conditionally render either RoomDetailsTableComponent or AddRoomComponent */}
                {showAddRoom ? (
                  <AddRoomComponent />
                ) : (
                  <RoomDetailsTableComponent />
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default roomdetails;
