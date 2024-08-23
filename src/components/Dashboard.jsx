import DashboardHeader from "./DashboardHeader";
import NoPermission from "./NoPermission";
import EmptyIllustration from "./EmptyIllustration";
import PropTypes from "prop-types";

const Dashboard = ({ className = "" }) => {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "23px",
        maxWidth: "calc(100% - 293px)",
        textAlign: "left",
        fontSize: "14px",
        color: "#0052cc",
        fontFamily: "'Open Sans'",
      }}
      className={className}
    >
      <DashboardHeader />
      <div
        style={{
          alignSelf: "stretch",
          height: "234px",
          position: "relative",
          maxWidth: "100%",
          fontSize: "24px",
          color: "#fff",
          fontFamily: "Roboto",
        }}
      >
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