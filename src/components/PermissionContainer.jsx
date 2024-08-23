import PropTypes from "prop-types";

const PermissionContainer = ({ className = "" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "30px",
        textAlign: "left",
        fontSize: "24px",
        color: "#151a3b",
        fontFamily: "Roboto",
      }}
      className={className}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "9px",
        }}
      >
        <div
          style={{
            width: "224px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 0px 0px 0px",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              margin: "0",
              width: "273px",
              position: "relative",
              fontSize: "inherit",
              lineHeight: "29px",
              fontWeight: "700",
              fontFamily: "inherit",
              display: "flex",
              alignItems: "center",
              flexShrink: "0",
            }}
          >
            No permission to access.
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            fontSize: "13px",
            fontFamily: "'Open Sans'",
          }}
        >
          <div style={{ position: "relative", lineHeight: "22px" }}>
            <p
              style={{ margin: "0" }}
            >{`Sorry, you do not have sufficient permissions to `}</p>
            <p style={{ margin: "0" }}>view this page.</p>
          </div>
        </div>
      </div>
      <button
        style={{
          cursor: "pointer",
          border: "1px solid #0052cc",
          padding: "4px 14px",
          backgroundColor: "transparent",
          width: "98px",
          borderRadius: "4px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          whiteSpace: "nowrap",
        }}
      >
        <b
          style={{
            position: "relative",
            fontSize: "14px",
            lineHeight: "25px",
            display: "inline-block",
            fontFamily: "Roboto",
            color: "#0052cc",
            textAlign: "center",
            minWidth: "68px",
          }}
        >
          Contact us
        </b>
      </button>
    </div>
  );
};

PermissionContainer.propTypes = {
  className: PropTypes.string,
};

export default PermissionContainer;