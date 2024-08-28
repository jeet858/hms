import Image from "next/image";
import React, { Fragment, type ReactElement, useState } from "react";
import demo from "images/hx_4 1.png";
import { DashboardTemplate } from "~/components";
// import DetailsTable from "~/components/tables/DetailsTable";
import Diagonosis from "~/components/elements/Diagonosis";
import GeneralInfo from "~/components/elements/GeneralInfo";

const PatientInfo:React.FunctionComponent = () => {
  const [arr, setArr] = useState([
    { name: "General Information", value: false, component: <GeneralInfo /> },
    { name: "Diagonosis", value: false, component: <Diagonosis /> },
    { name: "Abc", value: false, component: <Fragment /> },
    { name: "Abc", value: false, component: <Fragment /> },
    { name: "Abc", value: false, component: <Fragment /> },
    { name: "Abc", value: false, component: <Fragment /> },
    { name: "Abc", value: false, component: <Fragment /> },
    { name: "Abc", value: false, component: <Fragment /> },
    { name: "Abc", value: false, component: <Fragment /> },
    { name: "Abc", value: false, component: <Fragment /> },
    { name: "Abc", value: false, component: <Fragment /> },
    { name: "Abc", value: false, component: <Fragment /> },
  ]);
  const [selectedComponent, setSelectedComponent] = useState<ReactElement|null>(<GeneralInfo/>);
  const handelBar = (index: number) => {
    const updatedList = arr.map((item, i) =>
      i === index ? { ...item, value: true } : { ...item, value: false }
    );
    setArr(updatedList);
    updatedList[index]?setSelectedComponent(updatedList[index].component):setSelectedComponent(null)
  };
  return (
    <DashboardTemplate active_tile="In Door Patient">
      <div className="flex h-full w-full flex-row overflow-y-scroll ">
        <div className="flex  h-full w-[30%] flex-col">
          <span>Patients Profile</span>
          <Image className="h-64 w-fit" src={demo} alt="/" />
          <div className="flex h-fit w-full flex-col">
            {arr.map((item,index) => {
              return (
                  <p
                    key={index}
                    onClick={()=>handelBar(index)}
                    className="flex h-5 w-full justify-start space-x-4"
                  >
                    <span
                      className={`h-full w-[10px] bg-[#FFB800] ${item.value ? "visible" : "invisible"}`}
                    ></span>
                    <span className="flex h-full items-center">
                      {item.name}
                    </span>
                  </p>
                
              );
            })}
          </div>
        </div>
        <div className="h-full w-[70%]">
          {
            selectedComponent
          }
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default PatientInfo;
