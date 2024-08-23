import { FunctionComponent } from "react";
import DashboardHeader from "./DashboardHeader";
import NoPermission from "./NoPermission";
import EmptyIllustration from "./EmptyIllustration";
import "./Dashboard.css";

export type DashboardType = {
  className?: string;
};

const Dashboard: FunctionComponent<DashboardType> = ({ className = "" }) => {
  return (
    <div className={`dashboard ${className}`}>
      <DashboardHeader />
      <div className="no-permission-parent">
        <NoPermission />
        <EmptyIllustration />
      </div>
    </div>
  );
};

export default Dashboard;