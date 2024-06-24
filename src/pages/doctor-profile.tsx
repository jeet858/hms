import React from "react";
import { DashboardTemplate } from "~/components";
import doctorimg from "/images/hx_4 1.png";
import ProfileComponent from "~/components/elements/ProfileComponent";

const doctorprofile: React.FC = () => {
  const content = {
    profile: [
      {
        imgsrc: doctorimg,
        name: "Dr. Amit Agarwal",
        specialities: "Cardiologist",
        phone: "+91 9830012300",
        email: "loremipsum@gmail.com",
        location: "15C Lake Terrace, Kolkata, PIN 700100",
        collage: "The Calcutta Medical Research Institute - Kolkata",
        details: [
          { name: "Qualifications", detail: "MBBS, MD, FRCS" },
          { name: "Gender", detail: "Male" },
          { name: "Age", detail: "55 Years " },
          { name: "Preferred Language", detail: "English" },
          { name: "Blood Group ", detail: "A+" },
          { name: "Available Dates", detail: "Mon - Sat" },
          { name: "Time Slot", detail: "4 PM - 7 PM" },
        ],
      },
    ],
    butonvalue: "GET APPOINMENT",
  };

  return (
    <DashboardTemplate active_tile="Doctors">
      <div className="flex  w-full flex-col gap-16 p-4">
        <div className="text-3xl font-medium text-[#000000CC]">
          Doctor’s Profile
        </div>
        <span>
          <ProfileComponent content={content} />
        </span>
      </div>
    </DashboardTemplate>
  );
};

export default doctorprofile;
