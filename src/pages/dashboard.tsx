import React from "react";
import { DashboardTemplate, StatusTile } from "~/components";

const Dashboard: React.FunctionComponent = () => {
  return (
    <DashboardTemplate active_tile="Home">
      <div className="flex h-full min-h-full w-full flex-wrap ">
        {/* <StatusTile /> */}
      </div>
    </DashboardTemplate>
  );
};

export default Dashboard;
