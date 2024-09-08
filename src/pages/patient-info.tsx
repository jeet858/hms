import Image from "next/image";
import React, { type ReactElement, useState } from "react";
import demo from "../../images/patientimg.png";
import { DashboardTemplate } from "~/components";
// import DetailsTable from "~/components/tables/DetailsTable";
import Diagonosis from "~/components/elements/Diagonosis";
import GeneralInfo from "~/components/elements/GeneralInfo";
import Medication from "~/components/elements/Medication";
import Complain from "~/components/elements/Complain";
import Progress from "~/components/elements/Progress";
import IntakeOutputRecords from "~/components/elements/IntakeOutputRecords";
import NurseProgressNote from "~/components/elements/NursePorgressNote";
import VitalSign from "~/components/elements/VitalSign";
import IpRoomTransfer from "~/components/elements/IpRoomTransfer";
import OperationTheatre from "~/components/elements/OperationThreatre";
import PatientHistory from "./PatientHistory";
const PatientInfo: React.FunctionComponent = () => {
  const [arr, setArr] = useState([
    { name: "General Information", value: false, component: <GeneralInfo /> },
    { name: "Diagonosis", value: false, component: <Diagonosis /> },
    { name: "Medication", value: false, component: <Medication /> },
    { name: "Complain", value: false, component: <Complain /> },
    { name: "Progress", value: false, component: <Progress /> },
    {
      name: "Intake/Output Records",
      value: false,
      component: <IntakeOutputRecords />,
    },
    {
      name: "Nurse progress note",
      value: false,
      component: <NurseProgressNote />,
    },
    { name: "Vital Sign", value: false, component: <VitalSign /> },
    { name: "IP Room Transfer", value: false, component: <IpRoomTransfer /> },
    {
      name: "Operation Theatre",
      value: false,
      component: <OperationTheatre />,
    },
    { name: "Patient History", value: false, component: <PatientHistory /> },
    { name: "Laboratory", value: false, component: <PatientHistory /> },
    { name: "Discharge Summary", value: false, component: <PatientHistory /> },
  ]);
  const [selectedComponent, setSelectedComponent] = useState<ReactElement | null>(<GeneralInfo />);
  const handelBar = (index: number) => {
    const updatedList = arr.map((item, i) =>
      i === index ? { ...item, value: true } : { ...item, value: false },
    );
    setArr(updatedList);
    updatedList[index]
      ? setSelectedComponent(updatedList[index].component)
      : setSelectedComponent(null);
  };
  return (
    <DashboardTemplate active_tile="In Door Patient">
      <div className="flex h-full w-full flex-row ">
        <div className="flex h-full overflow-y-scroll  w-[28%] flex-col">
          <span className="h-[8%] text-[35px]">Patients Profile</span>
          <Image className="h-[30%] w-fit" src={demo} alt="/" />
          <div className=" flex h-[10%] w-[70%] flex-col space-y-[.4rem] border-b-[3px] border-zinc-400 pt-[.4rem]">
            <span className="text-[22px] text-[#00738C]">Deepak Majumder</span>
            <span className="text-[20px]">
              ID: <span className="text-[#0E8803]">PT 101</span>
            </span>
          </div>
          <span className="flex-1 flex-col justify-between space-y-[.5rem] py-[.5rem]">
            {arr.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handelBar(index)}
                  className={`flex h-fit w-full justify-start pl-[2rem] text-[15px] hover:border-l-[8px] hover:border-yellow-400 hover:text-[#006B82] ${item.value ?'border-l-[8px] border-yellow-400 pl-[.2rem] text-[#006B82]':""}`}
                >
                  {/* <span
                    className={`h-full w-[5px] bg-[#FFB800] ${item.value ? "visible" : "invisible"}`}
                  ></span> */}
                  <span className="flex h-full items-center">{item.name}</span>
                </div>
              );
            })}
          </span>
        </div>
        <div className="h-full w-[70%] relative">{selectedComponent}</div>
      </div>
    </DashboardTemplate>
  );
};

export default PatientInfo;
