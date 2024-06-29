import Image from "next/image";
import React from "react";
import patientimg from "/images/patientimg.png";

const PatientProfileComponrnt: React.FunctionComponent = () => {
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
    <div className="flex flex-col gap-4 ">
      {patientprofile.map((profile, index) => (
        <div key={index} className="flex flex-col gap-4">
          <span>
            <Image src={profile.imgsrc} alt="" className="w-full" />
          </span>
          <span className="flex flex-col gap-2 border-b-2 border-[#00000073] pb-4">
            <div className="text-3xl font-semibold text-[#00738C]">
              {profile.name}
            </div>
            <div className="flex justify-between text-lg font-semibold text-[#0E8803]">
              <span>Active</span>
              <span>
                Bed No.
                {profile.bedno}
              </span>
            </div>
          </span>
          <div className="flex flex-col gap-1">
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
  );
};

export default PatientProfileComponrnt;
