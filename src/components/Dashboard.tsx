import DashboardHeader from "./DashboardHeader";
import NoPermission from "./NoPermission";
import EmptyIllustration from "./EmptyIllustration";
import PropTypes from "prop-types";
import "./Dashboard.css";

const Dashboard = ({ className = "" }) => {
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

Dashboard.propTypes = {
  className: PropTypes.string,
};

export default Dashboard;