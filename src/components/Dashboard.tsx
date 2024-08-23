import DashboardHeader from "./DashboardHeader";
import NoPermission from "./NoPermission";
import PropTypes from "prop-types";
import "./Dashboard.css";

const Dashboard = ({ className = "" }) => {
  return (
    <div className={`dashboard ${className}`}>
      <DashboardHeader />
      <div className="no-permission-parent">
        <NoPermission />
        <img
          className="empty-illustration-icon"
          loading="lazy"
          alt=""
          src="/empty-illustration.svg"
        />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  className: PropTypes.string,
};

export default Dashboard;
