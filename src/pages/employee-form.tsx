import { headers } from "next/headers";
import React from "react";
import { data, width } from "tailwindcss/defaultTheme";
import { DashboardTemplate } from "~/components";
import Depertment from "~/components/elements/Depertment";
import Designation from "~/components/elements/Designation";
import ManageTile from "~/components/elements/ManageTile";
import AddDoctorForm from "~/components/form/AddDoctorForm";
import EmployeeDetails from "~/components/form/EmployeeDetails";
import TileLayout from "~/components/layout/TileLayout";
import CustomTable from "~/components/tables/CustomTable";

const HrManagement: React.FC = () => {
  return (
    <DashboardTemplate active_tile="Doctors">
      <div className="h-full w-full flex flex-col p-[1%]">
        <div>
          <ManageTile
            title="Manage HR"
            doctors={10}
            patients={50}
            nurses={20}
            pharmacists={5}
            laboratorists={3}
            accountants={2}
          />
        </div>
        <div className="h-full w-full">
          <TileLayout
            tileone={"Add Employee"}
            tiletwo={""}
            children1={<EmployeeDetails />}
            children2={<></>}
          />
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default HrManagement;
