import PropTypes from "prop-types";

const PageHeader = ({ className = "" }) => {
  return (
    <div
      style={{
        flex: "1",
        boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.08)",
        borderRadius: "4px 4px 0px 0px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "24px",
        boxSizing: "border-box",
        gap: "1039px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "14px",
        color: "#0052cc",
        fontFamily: "'Open Sans'",
      }}
      className={className}
    >
      <div
        style={{
          width: "225px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "16px",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                position: "relative",
                lineHeight: "22px",
                fontWeight: "600",
                color: "inherit",
                display: "inline-block",
                minWidth: "41px",
              }}
            >
              Home
            </a>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "8px",
                fontSize: "24px",
                color: "#262626",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <img
                  style={{
                    height: "36px",
                    width: "36px",
                    position: "relative",
                  }}
                  loading="lazy"
                  alt=""
                  src="/icon-31.svg"
                />
                <h2
                  style={{
                    margin: "0",
                    position: "relative",
                    fontSize: "inherit",
                    lineHeight: "32px",
                    fontWeight: "600",
                    fontFamily: "inherit",
                  }}
                >
                  VPN Site-to-Site
                </h2>
              </div>
              <div
                style={{
                  position: "relative",
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: "#595959",
                }}
              >
                Manage all VPN Site-to-Site in VPC
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "38px",
          width: "288px",
          display: "none",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "16px",
          textAlign: "center",
          color: "#262626",
        }}
      >
        <div
          style={{
            borderRadius: "4px",
            backgroundColor: "#fff",
            border: "1px solid #d9d9d9",
            display: "none",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "6px 15px",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "22px",
              fontWeight: "600",
            }}
          >
            Refresh
          </div>
        </div>
        <div
          style={{
            width: "188px",
            borderRadius: "4px",
            backgroundColor: "#0052cc",
            display: "none",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "8px 16px",
            boxSizing: "border-box",
            whiteSpace: "nowrap",
            color: "#fff",
          }}
        >
          <div
            style={{
              width: "156px",
              position: "relative",
              lineHeight: "22px",
              fontWeight: "600",
              display: "none",
            }}
          >
            Create VPN connection
          </div>
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
};

export default PageHeader;