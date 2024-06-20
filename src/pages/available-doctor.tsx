import React from "react";
import { DashboardTemplate, IndoorPatientTemplate } from "~/components";
import AvailableDoctorBoxComponent from "~/components/elements/AvailableDoctorBoxComponent";

const availabledoctor: React.FunctionComponent = () => {
  return (
    <IndoorPatientTemplate active_tile="Available Doctors">
      <div className="flex w-full flex-col gap-4 p-4">
        <div className="flex w-full items-center justify-between">
          <span className="text-2xl font-semibold text-[#00738C]">
            Available Doctor
          </span>
          <span className="text-xl font-semibold text-[#000000BF]">
            <span className="text-2xl text-[#FFB800]">+</span> Add Doctor
          </span>
        </div>
        <div className="">
          <AvailableDoctorBoxComponent />
        </div>
      </div>
    </IndoorPatientTemplate>
  );
};

export default availabledoctor;
