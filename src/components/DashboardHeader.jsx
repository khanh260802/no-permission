import PageHeader from "./PageHeader";
import PropTypes from "prop-types";

const DashboardHeader = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "14px",
        color: "#0052cc",
        fontFamily: "'Open Sans'",
      }}
      className={className}
    >
      <PageHeader />
      <div
        style={{
          height: "38px",
          width: "1600px",
          display: "none",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          maxWidth: "100%",
          textAlign: "center",
          color: "#595959",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            backgroundColor: "#d9d9d9",
            overflowX: "auto",
            display: "none",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "1px",
          }}
        >
          <div
            style={{
              height: "38px",
              boxShadow: "0px -1px 0px #0052cc inset",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 24px",
              boxSizing: "border-box",
              whiteSpace: "nowrap",
              color: "#0052cc",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "22px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              VPN connection
            </div>
          </div>
          <div
            style={{
              height: "38px",
              boxShadow: "0px -1px 0px #d9d9d9 inset",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 24px",
              boxSizing: "border-box",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Customer gateways
            </div>
          </div>
          <div
            style={{
              height: "38px",
              boxShadow: "0px -1px 0px #d9d9d9 inset",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 24px",
              boxSizing: "border-box",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              IKE policies
            </div>
          </div>
          <div
            style={{
              height: "38px",
              boxShadow: "0px -1px 0px #d9d9d9 inset",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 24px",
              boxSizing: "border-box",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              IPSec policies
            </div>
          </div>
          <div
            style={{
              height: "38px",
              flex: "1",
              boxShadow: "0px -1px 0px #d9d9d9 inset",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 24px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                width: "64px",
                position: "relative",
                lineHeight: "22px",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Other tab
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardHeader.propTypes = {
  className: PropTypes.string,
};

export default DashboardHeader;