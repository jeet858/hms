import React from "react";
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md";

import Image, { StaticImageData } from "next/image";
// Define the types
type Detail = {
  name: string;
  detail: string;
};

type Profile = {
  imgsrc: string | StaticImageData;
  name: string;
  specialities: string;
  phone: string;
  email: string;
  location: string;
  collage: string;
  details: Detail[];
};

type Content = {
  profile: Profile[];
  butonvalue: string;
};

// Define the prop types for the component
interface ProfileComponentProps {
  content: Content;
}
const ProfileComponent: React.FC<ProfileComponentProps> = ({ content }) => {
  const { profile, butonvalue } = content;
  return (
    <div className="flex w-full flex-row">
      <div className="flex w-[40%] items-center justify-start">
        <div className="flex w-[70%] flex-col gap-4">
          {profile.map((profile, index) => (
            <div key={index} className="flex flex-col gap-4">
              <span>
                <Image src={profile.imgsrc} alt="" className="w-full" />
              </span>
              <span className="flex flex-col gap-2 border-b-2 border-[#00000073] pb-4">
                <div className="text-3xl font-semibold text-[#00738C]">
                  {profile.name}
                </div>
                <div className="text-lg font-semibold text-[#FFB800]">
                  {profile.specialities}
                </div>
              </span>
              <div className="flex flex-col gap-2 text-sm text-[#2E2E2E]">
                <span className="flex flex-row items-center gap-1 ">
                  <span>
                    <MdLocalPhone className="text-[#287CC6]" />
                  </span>
                  {profile.phone}
                </span>
                <span className="flex flex-row items-center gap-1 ">
                  <span>
                    <MdEmail className="text-[#287CC6]" />
                  </span>
                  {profile.email}
                </span>
                <span className="flex flex-row items-center gap-1 ">
                  <span>
                    <MdLocationOn className="text-[#287CC6]" />
                  </span>
                  {profile.location}
                </span>
              </div>
              <button className="flex h-[3rem] w-full items-center justify-center rounded-md bg-[#FFB800] text-base font-semibold text-[#2E2E2E] ">
                {butonvalue}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-[50%] flex-col gap-4">
        {profile.map((profile, index) => (
          <div key={index} className="flex flex-col gap-10">
            <span className="flex flex-col gap-2">
              <div className="text-3xl font-semibold text-[#00738C]">
                {profile.name}
              </div>
              <div className="text-lg">{profile.collage}</div>
            </span>
            <div className="flex flex-col gap-3 text-lg text-[#003A47] ">
              {profile.details.map((detail, index) => (
                <div key={index} className="flex  items-center gap-2">
                  <div className="w-[40%] ">{detail.name} :</div>
                  <div className="w-[40%] ">{detail.detail}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileComponent;
