import React, { useState } from "react";
import { DashboardTemplate } from "~/components";
import ManageTile from "~/components/elements/ManageTile";
import EmployeeTile from "~/components/layout/EmployeeTile";
import EmployeeTable from "~/components/tables/EmployeeTable";
const managemployee: React.FunctionComponent = () => {
  const headers = ["ID", "Name", "Date", "In Time", "Out Time", "Place"];

  const data = [
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
    {
      ID: "01",
      Name: "Jhuma Mazumder",
      Date: "04-07-2024",
      InTime: "08-45",
      OutTime: "22-05",
      Place: "BarrackPore",
    },
  ];
  const width = [
    "w-[10%]",
    "w-[24%]",
    "w-[14%]",
    "w-[24%]",
    "w-[14%]",
    "w-[14%]",
  ];

  return (
    <DashboardTemplate active_tile="Nurses">
      <div className="h-full w-full p-[1%]">
        <div>
          <div>
            <ManageTile
              title="Manage Employee"
              doctors={22}
              patients={13400}
              nurses={107}
              pharmacists={35}
              laboratorists={140}
              accountants={5}
            />
          </div>
          <div className="h-full w-full">
            <div className="w-full">
              <EmployeeTile
                tileone={"Attendance Report"}
                children1={
                  <EmployeeTable headers={headers} data={data} widths={width} />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default managemployee;
