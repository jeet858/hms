import React from "react";
import { DashboardTemplate } from "~/components";
import ProfileComponent from "~/components/elements/ProfileComponent";
import doctorimg from "/images/Mask group.png";

const nurseprofile: React.FunctionComponent = () => {
  const content = {
    profile: [
      {
        imgsrc: doctorimg,
        name: "Ms. Soma Bera",
        specialities: "Nursing Staff, Cardiology",
        phone: "+91 9830012300",
        email: "loremipsum@gmail.com",
        location: "15C Lake Terrace, Kolkata, PIN 700100",
        collage: "The Calcutta Medical Research Institute - Kolkata",
        details: [
          { name: "Qualifications", detail: "GNM, BSc." },
          { name: "Gender", detail: "Female" },
          { name: "Age", detail: "32 Years " },
          { name: "Current Shift", detail: "Morning" },
          { name: "Current Ward", detail: "General" },
          { name: "Current Bed No", detail: "10101" },
          { name: "Previous Shift ", detail: "Night" },
          { name: "Previous Ward ", detail: "Executive" },
          { name: "Previous Bed No", detail: "10201" },
        ],
      },
    ],
    butonvalue: "MANAGE DUTY",
  };
  return (
    <DashboardTemplate active_tile="Nurses">
      <div className="flex  w-full flex-col gap-16 p-4">
        <div className="text-3xl font-medium text-[#000000CC]">
          Nurse Profile
        </div>
        <span>
          <ProfileComponent content={content} />
        </span>
      </div>
    </DashboardTemplate>
  );
};

export default nurseprofile;
