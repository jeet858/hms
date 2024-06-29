import React from "react";
import { DashboardTemplate } from "~/components";
import PatientGaneralComponent from "~/components/elements/PatientGaneralComponent";
import PatientProfileComponrnt from "~/components/elements/PatientProfileComponrnt";

const PatientProfileGaneral: React.FC = () => {
  return (
    <DashboardTemplate active_tile="Patients">
      <div className="flex  w-full flex-col gap-16 p-4">
        <div className="text-3xl font-medium text-[#000000CC]">
          Patient’s Profile
        </div>
        <div className="flex w-full flex-row justify-between ">
          <div className="flex w-[25%] items-center justify-start">
            <div className="flex w-full flex-col gap-4">
              <PatientProfileComponrnt />
            </div>
          </div>
          <div className=" w-[70%]">
            <PatientGaneralComponent />
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default PatientProfileGaneral;
