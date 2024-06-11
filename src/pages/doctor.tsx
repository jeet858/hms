import React, { useState } from "react";
import { DashboardTemplate } from "~/components";
import AddDoctor from "~/components/layout/TileLayout";
import ManageTile from "~/components/elements/ManageTile";

const Doctor: React.FC = (props) => {
  const [page, setPage] = useState<number>(1);

  return (
    <DashboardTemplate active_tile="Doctors">
      <div className="h-full w-full p-[1%]">
        <div>
          <div>
            <ManageTile
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
