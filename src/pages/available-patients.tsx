import React from "react";
import  DashboardTemplate  from "../components/templates/DashboardTemplate"
import { FaPlus } from "react-icons/fa6";
import IndoorPatient from "../components/elements/IndoorPatient";

const AvailablePatients: React.FunctionComponent = () => {
  const data = [
    {
      img: "Ellipse 10.png",
      name: "Averil McCloch",
      illness: "abdominal pain",
      visit: 1,
    },
    {
      img: "Ellipse 11.png",
      name: "Gianluigi Buffon",
      illness: "Chest pain",
      visit: 1,
    },
    {
      img: "Ellipse 10 (1).png",
      name: "Harry Maguire",
      illness: "respiratory disfunciom",
      visit: 1,
    },
    {
      img: "Ellipse 10 (2).png",
      name: "Antony Martial",
      illness: "stomac ulcer",
      visit: 1,
    },
    {
      img: "Ellipse 10 (3).png",
      name: "Kevin Debruyne",
      illness: "Hypertension",
      visit: 1,
    },
    {
      img: "Ellipse 10 (4).png",
      name: "Park Ji Sung",
      illness: "PTSD",
      visit: 1,
    },
    {
      img: "Ellipse 10 (5).png",
      name: "Antony Griezzman",
      illness: "PTSD",
      visit: 1,
    },
    {
      img: "Ellipse 10 (6).png",
      name: "Kiliyan Mbappe",
      illness: "PTSD",
      visit: 1,
    },
    {
      img: "Ellipse 10 (7).png",
      name: "Paul Pogba",
      illness: "ADHD",
      visit: 1,
    },
    {
      img: "Ellipse 10 (8).png",
      name: "Didier Drogba",
      illness: "ADHD",
      visit: 1,
    },
    {
      img: "Ellipse 10 (9).png",
      name: "Jimmy Carragher",
      illness: "ADHD",
      visit: 1,
    },
    {
      img: "Ellipse 10 (10).png",
      name: "Andre Russell",
      illness: "ADHD",
      visit: 1,
    },
    {
      img: "Ellipse 10 (11).png",
      name: "Brandon McCullum",
      illness: "ADHD",
      visit: 1,
    },
    {
      img: "Ellipse 10 (12).png",
      name: "Alexis McAlister",
      illness: "ADHD",
      visit: 1,
    },
    {
      img: "Ellipse 10 (13).png",
      name: "Narendra Modi",
      illness: "ADHD",
      visit: 1,
    },
    {
      img: "Ellipse 10 (14).png",
      name: "Enzo Fernandez",
      illness: "Loose motion",
      visit: 1,
    },
    {
      img: "Ellipse 10 (15).png",
      name: "Benjamin Fernandez",
      illness: "Loose motion",
      visit: 1,
    },
    {
      img: "Ellipse 10 (16).png",
      name: "KL Rahul",
      illness: "Loose motion",
      visit: 1,
    },
    {
      img: "Ellipse 10 (17).png",
      name: "Harry Porter",
      illness: "Loose motion",
      visit: 1,
    },
  ];
  return (
    <div>
      <DashboardTemplate active_tile="In Door Patient">
        <div className="flex h-full w-full flex-col items-center">
          <div className="flex h-[10%] w-full flex-row items-end justify-between pr-[2rem]">
            <h3 className="text-[24px] text-[#00738C]">
              Available Indoor Patients
            </h3>
            <span className="flex w-[11.5%] items-center justify-between hover:cursor-pointer">
              <FaPlus className="text-[25px] text-[#FFB800]" />
              <span className="text-[22px]">Add Patient</span>
            </span>
          </div>
          <div className="flex h-[8%] w-full items-center text-[19px]">
            View List
          </div>
          <div className=" flex h-[75%] w-full flex-row flex-wrap gap-x-[1rem] gap-y-[1.7rem] pl-[1rem]">
            {data.map((item, index) => (
              <IndoorPatient
                key={index}
                img={item.img}
                name={item.name}
                illness={item.illness}
                visit={item.visit}
              />
            ))}
          </div>
        </div>
      </DashboardTemplate>
    </div>
  );
};
export default AvailablePatients;
