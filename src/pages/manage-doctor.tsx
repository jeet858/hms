import React, { useState, useEffect } from "react";
import { DashboardTemplate } from "~/components";
import CustomTable from "~/components/tables/CustomTable";
import AddDoctor from "~/components/form/AddDoctor";
import ManageDoctor from "~/components/elements/ManageDoctor";

const DoctorList: React.FC = (props) => {
  const [page, setPage] = useState<number>(1);

  // const widths = [
  //   "100px",
  //   "200px",
  //   "50px",
  //   "100px",
  //   "150px",
  //   "150px",
  //   "100px",
  //   "50px",
  //   "100px",
  // ];
  // const paddings = [
  //   "px-2",
  //   "10px",
  //   "10px",
  //   "10px",
  //   "10px",
  //   "10px",
  //   "10px",
  //   "10px",
  //   "10px",
  // ]

  // const render = () => {
  //   switch (page) {
  //     case 1:
  //       return (
  //         // <CustomTable
  //         //   headers={headers}
  //         //   data={data}
  //         //   // widths={widths}
  //         //   // padding={paddings}
  //         // />
  //         <p>xyz</p>
  //       );
  //       break;
  //     case 2:
  //       return <AddDoctor />;
  //       break;
  //   }
  // };

  return (
    <DashboardTemplate active_tile="Doctors">
      <div className="h-full w-full p-[1%]">
        <div>
          <div>
            <ManageDoctor
              title="Manage Doctor"
              doctors={10}
              patients={50}
              nurses={20}
              pharmacists={5}
              laboratorists={3}
              accountants={2}
            />
          </div>
          <div className="h-full w-full">
            <div className="w-full">
              <AddDoctor tileone={"Doctor List"} tiletwo={"Add Doctor"} />
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
};
export default DoctorList;
