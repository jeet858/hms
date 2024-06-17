import React from "react";
import { DashboardTemplate } from "~/components";
import DoctorProfileComponent from "~/components/elements/DoctorProfileComponent";

const doctorprofile: React.FunctionComponent = () => {
  return (
    <DashboardTemplate active_tile="Doctors">
      <div className="flex  w-full flex-col gap-16 p-4">
        <div className="text-3xl font-medium text-[#000000CC]">
          Doctor’s Profile
        </div>
        <span>
          <DoctorProfileComponent />
        </span>
      </div>
    </DashboardTemplate>
  );
};

export default doctorprofile;
