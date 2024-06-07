import React from "react";
import img from "../../../images/hx_4 1.png";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
const AvailableDoctorBoxComponent: React.FunctionComponent = () => {
  const availabledoctorbox = [
    {
      name: "Ronald Specter",
      specialities: "Anesthesiology",
      degree: "MBBS, FCPS, FICS (USA)",
      week: "Sun - Fri",
      time: "10:00 am to 1:00 pm",
    },
    {
      name: "Ronald Specter",
      specialities: "Anesthesiology",
      degree: "MBBS, FCPS, FICS (USA)",
      week: "Sun - Fri",
      time: "10:00 am to 1:00 pm",
    },
    {
      name: "Ronald Specter",
      specialities: "Anesthesiology",
      degree: "MBBS, FCPS, FICS (USA)",
      week: "Sun - Fri",
      time: "10:00 am to 1:00 pm",
    },
    {
      name: "Ronald Specter",
      specialities: "Anesthesiology",
      degree: "MBBS, FCPS, FICS (USA)",
      week: "Sun - Fri",
      time: "10:00 am to 1:00 pm",
    },
    {
      name: "Ronald Specter",
      specialities: "Anesthesiology",
      degree: "MBBS, FCPS, FICS (USA)",
      week: "Sun - Fri",
      time: "10:00 am to 1:00 pm",
    },
    {
      name: "Ronald Specter",
      specialities: "Anesthesiology",
      degree: "MBBS, FCPS, FICS (USA)",
      week: "Sun - Fri",
      time: "10:00 am to 1:00 pm",
    },
    {
      name: "Ronald Specter",
      specialities: "Anesthesiology",
      degree: "MBBS, FCPS, FICS (USA)",
      week: "Sun - Fri",
      time: "10:00 am to 1:00 pm",
    },
    {
      name: "Ronald Specter",
      specialities: "Anesthesiology",
      degree: "MBBS, FCPS, FICS (USA)",
      week: "Sun - Fri",
      time: "10:00 am to 1:00 pm",
    },
    {
      name: "Ronald Specter",
      specialities: "Anesthesiology",
      degree: "MBBS, FCPS, FICS (USA)",
      week: "Sun - Fri",
      time: "10:00 am to 1:00 pm",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {availabledoctorbox.map((doctor, index) => (
        <div
          className="boxsh flex w-full flex-col gap-4 rounded-xl"
          key={index}
        >
          <div className="flex flex-row items-start justify-between">
            <span className="boxsh mt-4 h-[5.5rem] w-[30%] rounded-br-[3rem] rounded-tr-xl border-2 border-[#FFB800] ">
              <span className="relative flex h-full w-full items-center justify-center">
                <Image
                  src={img}
                  alt=""
                  className="h-[4.1rem] w-[4.1rem] rounded-full"
                />
                <div className=" absolute right-2 top-[0.8rem] h-3 w-3 -translate-y-1/2 transform rounded-full bg-[#FFB800]"></div>
              </span>
            </span>
            <span className="flex items-center p-2">
              4.5{" "}
              <span className="text-[#FFB800]">
                <IoStar />
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-1 p-4">
            <span className="text-xl font-semibold text-[#00738C]">
              {doctor.name}
            </span>
            <div className="flex flex-row items-center justify-between">
              <span className="flex flex-col  text-lg font-semibold text-[#FFB800]">
                <span>{doctor.specialities}</span>
                <span className="text-sm">{doctor.degree}</span>
              </span>
              <span className="flex flex-col  text-end text-xs text-[#00738C]">
                <span>{doctor.week}</span>
                <span>{doctor.time}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableDoctorBoxComponent;
