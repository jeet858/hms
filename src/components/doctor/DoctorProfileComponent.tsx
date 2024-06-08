import React from "react";
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md";
import doctorimg from "../../../images/hx_4 1.png";
import Image from "next/image";
const DoctorProfileComponent: React.FunctionComponent = () => {
  const doctorsprofile = [
    {
      imgsrc: doctorimg,
      name: "Dr. Amit Agarwal",
      specialities: "Cardiologist",
      phone: "+91 9830012300",
      email: "loremipsum@gmail.com",
      location: "15C Lake Terrace, Kolkata, PIN 700100",
      collage: "The Calcutta Medical Research Institute - Kolkata",
      qualification: "MBBS, MD, FRCS",
      gender: "Male",
      age: "55 Years ",
      language: "English",
      bloodgroup: "A+",
      availbaledate: "Mon - Sat",
      availabletime: "4 PM - 7 PM",
    },
  ];
  return (
    <div className="flex w-full flex-row">
      <div className="flex w-[40%] items-center justify-start">
        <div className="flex w-[70%] flex-col gap-4">
          {doctorsprofile.map((doctor, index) => (
            <div key={index} className="flex flex-col gap-4">
              <span>
                <Image src={doctor.imgsrc} alt="" className="w-full" />
              </span>
              <span className="flex flex-col gap-2 border-b-2 border-[#00000073] pb-4">
                <div className="text-3xl font-semibold text-[#00738C]">
                  {doctor.name}
                </div>
                <div className="text-lg font-semibold text-[#FFB800]">
                  {doctor.specialities}
                </div>
              </span>
              <div className="flex flex-col gap-2 text-sm text-[#2E2E2E]">
                <span className="flex flex-row items-center gap-1 ">
                  <span>
                    <MdLocalPhone className="text-[#287CC6]" />
                  </span>
                  {doctor.phone}
                </span>
                <span className="flex flex-row items-center gap-1 ">
                  <span>
                    <MdEmail className="text-[#287CC6]" />
                  </span>
                  {doctor.email}
                </span>
                <span className="flex flex-row items-center gap-1 ">
                  <span>
                    <MdLocationOn className="text-[#287CC6]" />
                  </span>
                  {doctor.location}
                </span>
              </div>
              <div className="flex h-[3rem] w-full items-center justify-center rounded-md bg-[#FFB800] text-base font-semibold text-[#2E2E2E] ">
                GET APPOINTMENT
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-[50%] flex-col gap-4">
        {doctorsprofile.map((doctor, index) => (
          <div key={index} className="flex flex-col gap-10">
            <span className="flex flex-col gap-2">
              <div className="text-3xl font-semibold text-[#00738C]">
                {doctor.name}
              </div>
              <div className="text-lg">{doctor.collage}</div>
            </span>
            <div className="flex flex-col gap-3 text-lg text-[#003A47] ">
              <div className="flex  items-center gap-2">
                <div className="w-[40%] ">Qualifications :</div>
                <div className="w-[40%] ">{doctor.qualification}</div>
              </div>
              <div className="flex  items-center gap-2">
                <div className="w-[40%] ">Gender :</div>
                <div className="w-[40%] ">{doctor.gender}</div>
              </div>
              <div className="flex  items-center gap-2">
                <div className="w-[40%] ">Age :</div>
                <div className="w-[40%] ">{doctor.age}</div>
              </div>
              <div className="flex  items-center gap-2">
                <div className="w-[40%] ">Preferred Language :</div>
                <div className="w-[40%] ">{doctor.language}</div>
              </div>
              <div className="flex  items-center gap-2">
                <div className="w-[40%] ">Blood Group :</div>
                <div className="w-[40%] ">{doctor.bloodgroup}</div>
              </div>
              <div className="flex  items-center gap-2">
                <div className="w-[40%] ">Available Dates :</div>
                <div className="w-[40%] ">{doctor.availbaledate}</div>
              </div>
              <div className="flex  items-center gap-2">
                <div className="w-[40%] ">Time Slot :</div>
                <div className="w-[40%] ">{doctor.availabletime}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorProfileComponent;
