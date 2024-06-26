import React, { useState } from "react";
import { DashboardTemplate } from "~/components";
import AdmissionData from "~/components/elements/patient details/AdmissionData";
import DiagnosisDetails from "~/components/elements/patient details/DiagnosisDetails";
import GeneralDetails from "~/components/elements/patient details/GeneralDetails";

const PatientProfile: React.FC = () => {
  const [patientDetails, setPatientDetails] = useState<
    "general" | "diagonosis" | "admissiondetails"
  >("general");

  const renderDetails = () => {
    switch (patientDetails) {
      case "general":
        return <GeneralDetails />;
        break;
      case "diagonosis":
        return <DiagnosisDetails />;
        break;
      case "admissiondetails":
        return <AdmissionData />;
        break;
    }
  };

  return (
    <DashboardTemplate active_tile={"Home"}>
      <div className="flex w-full flex-col">
        <span className="font-inter flex h-[10%] items-center justify-start text-[40px]/[48.41px] font-normal ">
          Patient’s Profile
        </span>
        <div className="flex h-[90%] w-full flex-row">
          <div className="h-full w-[30%]"></div>
          <div className="h-full w-[70%]">
            <div className="flex min-h-full w-full flex-col ">
              <div className="flex h-fit flex-row w-[60%] items-center justify-between font-sansation font-bold">
                <span
                  className="flex h-full cursor-pointer flex-col justify-between"
                  onClick={() => setPatientDetails("general")}
                >
                  General{" "}
                  <div
                    className={`h-[10%] w-full ${patientDetails === "general" ? "block" : "hidden"} border-b-2 border-yellow-400`}
                  ></div>
                </span>
                <span
                  className="flex h-full cursor-pointer flex-col justify-between"
                  onClick={() => setPatientDetails("diagonosis")}
                >
                  Diagonosis
                  <div
                    className={`h-[10%] w-full ${patientDetails === "diagonosis" ? "block" : "hidden"} border-b-2 border-yellow-400`}
                  ></div>
                </span>
                <span
                  className="flex h-full cursor-pointer flex-col justify-between"
                  onClick={() => setPatientDetails("admissiondetails")}
                >
                  Admission Details
                  <div
                    className={`h-[10%] w-full ${patientDetails === "admissiondetails" ? "block" : "hidden"} border-b-2 border-yellow-400`}
                  ></div>
                </span>
                
              </div>
              <div className="h-full min-h-full w-full grow">
                {renderDetails()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default PatientProfile;
