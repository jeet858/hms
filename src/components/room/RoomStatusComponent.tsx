import Image from "next/image";
import React from "react";
import roomstatusimg from "../../../images/roomstatusbed.png";
const RoomStatusComponent: React.FunctionComponent = () => {
  const roomstatus = [
    { name: "General Ward", availablebeds: "60" },
    { name: "Twin Sharing Room", availablebeds: "13" },
    { name: "Semi Deluxe", availablebeds: "15" },
    { name: "Deluxe", availablebeds: "20" },
    { name: "Executive", availablebeds: "50" },
    { name: "Executive Deluxe", availablebeds: "10" },
    { name: "General Ward", availablebeds: "30" },
    { name: "Twin Sharing Room", availablebeds: "16" },
    { name: "Semi Deluxe", availablebeds: "14" },
    { name: "Deluxe", availablebeds: "60" },
    { name: "Executive", availablebeds: "14" },
    { name: "Executive Deluxe", availablebeds: "14" },
  ];
  return (
    <div className="grid grid-cols-3 gap-6">
      {roomstatus.map((room, index) => (
        <div
          className="boxsh flex w-full flex-col gap-4 rounded-xl"
          key={index}
        >
          <div className="flex flex-row items-start justify-between">
            <span className="boxsh mt-4 h-[5.5rem] w-[30%] rounded-br-[3rem] rounded-tr-xl border-2 border-[#FFB800] ">
              <span className="relative flex h-full w-full items-center justify-center">
                <Image
                  src={roomstatusimg}
                  alt=""
                  className="h-[4.1rem] w-[4.1rem] rounded-full"
                />
                <div className=" absolute right-2 top-[0.8rem] h-3 w-3 -translate-y-1/2 transform rounded-full bg-[#FFB800]"></div>
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-1 p-4">
            <span className="text-xl font-semibold text-[#00738C]">
              {room.name}
            </span>

            <span className="flex flex-col  text-base font-semibold text-[#FFB800]">
              <span>Available Beds</span>
            </span>
            <span className="flex flex-row items-center justify-between text-xs text-[#00738C]">
              <span>{room.availablebeds}</span>
              <span>Check Status</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomStatusComponent;
