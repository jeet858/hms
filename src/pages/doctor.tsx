import React, { useState, useEffect } from "react";
import { DashboardTemplate } from "~/components";
import CustomTable from "~/components/tables/CustomTable";
import AddDoctor from "~/components/layout/TileLayout";
import ManageDoctor from "~/components/elements/ManageDoctor";

const Doctor: React.FC = (props) => {
  const [page, setPage] = useState<number>(1);

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
export default Doctor;
