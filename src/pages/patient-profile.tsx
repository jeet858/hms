import React, { useState } from "react";
import Image from "next/image";
import patientimg from "/images/patientimg.png";
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

  const patientprofile = [
    {
      imgsrc: patientimg,
      name: "Deepak Majumder",
      bedno: "10101",
      patientdetails: [
        { details: "Gender", info: "Male" },
        { details: "Age", info: "32 Years" },
        { details: "Language", info: "Bengali" },
        { details: "Height", info: "168 cm" },
        { details: "Weight", info: "78 Kgs" },
      ],
      symptoms: [
        {
          name: "Allergies",
          symptomsnames: [
            { symptomheading: "Penicillin", symptomdetail: "High" },
            { symptomheading: "Tilorone", symptomdetail: "Medium" },
          ],
        },
        {
          name: "Key Symptoms",
          symptomsnames: [
            { symptomheading: "Fever", symptomdetail: "" },
            { symptomheading: "Stomach Pain", symptomdetail: "" },
          ],
        },
      ],
    },
  ];
  const getColorForSeverity = (severity: string) => {
    switch (severity) {
      case "High":
        return "text-[#CC0E0E]";
      case "Medium":
        return "text-[#287CC6]";
      case "Low":
        return "text-gray-500";
      default:
        return "text-black";
    }
  };

  return (
    <DashboardTemplate active_tile={"Home"}>
      <div className="flex w-full flex-col">
        <span className="flex h-[10%] items-center justify-start font-inter text-[40px]/[48.41px] font-normal ">
          Patient’s Profile
        </span>
        <div className="flex h-[90%] w-full justify-between flex-row">
          <div className="h-full w-[25%]">
            <div className="flex flex-col ">
              {patientprofile.map((profile, index) => (
                <div key={index} className="flex flex-col space-y-[2%]">
                  <span>
                    <Image src={profile.imgsrc} alt="" className="w-full" />
                  </span>
                  <span className="flex flex-col gap-2 border-b-2 border-[#00000073] pb-4">
                    <div className="text-[24px]/[26.86px] font-semibold text-[#00738C]">
                      {profile.name}
                    </div>
                    <div className="flex justify-between  text-[18px]/[20.14px] font-semibold text-[#0E8803]">
                      <span>Active</span>
                      <span>
                        Bed No.
                        {profile.bedno}
                      </span>
                    </div>
                  </span>
                  <div className="flex flex-col gap-1 text-[20px]/[22.38px]">
                    {profile.patientdetails.map((patient, index) => (
                      <div
                        key={index}
                        className="flex w-full items-center justify-between"
                      >
                        <div className="">{patient.details}</div>
                        <div className="text-[#003A47]">{patient.info}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    {profile.symptoms.map((symptom, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-4 rounded-lg bg-[#FFB8002B] p-3"
                      >
                        <div className="flex flex-row justify-between ">
                          <span>{symptom.name}</span>
                          <span className="text-sm text-[#00000073]">
                            + Add {symptom.name}
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          {symptom.symptomsnames.map((symptomname, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between"
                            >
                              <span>{symptomname.symptomheading}</span>
                              <span
                                className={`${getColorForSeverity(symptomname.symptomdetail)}`}
                              >
                                {symptomname.symptomdetail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-full w-[70%]">
            <div className="flex min-h-full w-full flex-col ">
              <div className="flex h-fit w-[60%] flex-row items-center justify-between font-sansation font-bold">
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
