import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <header
      style={{
        alignSelf: "stretch",
        backgroundColor: "#0052cc",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 15px 0px 0px",
        boxSizing: "border-box",
        maxWidth: "100%",
        gap: "20px",
      }}
      className={className}
    >
      <div
        style={{
          width: "553.7px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "33px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "20px",
          }}
        >
          <img
            style={{ height: "60px", width: "60px", position: "relative" }}
            loading="lazy"
            alt=""
            src="/frame-626521.svg"
          />
          <img
            style={{ height: "32px", width: "180px", position: "relative" }}
            loading="lazy"
            alt=""
            src="/layer-1.svg"
          />
        </div>
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "13px",
            minWidth: "170px",
          }}
        >
          <Select
            style={{
              height: "38px",
              flex: "1",
              borderRadius: "4px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              border: "none",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 5px 0px 15px",
              boxSizing: "border-box",
              fontFamily: "'Open Sans'",
              fontSize: "14px",
              color: "#fff",
            }}
          />
          <div
            style={{
              height: "38px",
              width: "226px",
              borderRadius: "4px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              display: "none",
            }}
          />
        </div>
      </div>
      <Select
        style={{
          height: "60px",
          width: "86px",
          backgroundColor: "transparent",
          border: "none",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "19px 0px",
          boxSizing: "border-box",
          fontFamily: "'Open Sans'",
          fontSize: "13px",
          color: "#fff",
        }}
      />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;