import React from "react";
import { DashboardTemplate } from "~/components";
import RoomStatusComponent from "~/components/room/RoomStatusComponent";

const roomstatus: React.FunctionComponent = () => {
  return (
    <DashboardTemplate active_tile="Doctors">
      <div className="flex w-full flex-col gap-4 p-4">
        <div className="flex w-full items-center justify-between">
          <span className="text-2xl font-semibold text-[#00738C]">
            Room Status
          </span>
          <span className="text-xl font-semibold text-[#000000BF]">
            <span className="text-2xl text-[#FFB800]">+</span> Add Room
          </span>
        </div>
        <div className="">
          <RoomStatusComponent />
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default roomstatus;
