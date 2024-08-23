import PropTypes from "prop-types";

const InputSearch = ({ className = "" }) => {
  return (
    <div
      style={{
        flex: "1",
        borderRadius: "4px",
        backgroundColor: "#fff",
        border: "1px solid #d9d9d9",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 0px 0px 6px",
        textAlign: "left",
        fontSize: "14px",
        color: "#8c8c8c",
        fontFamily: "'Open Sans'",
      }}
      className={className}
    >
      <div
        style={{
          height: "29px",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "7px 0px 0px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            height: "22px",
            position: "relative",
            lineHeight: "22px",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
          }}
        >
          Search for service, resource name
        </div>
      </div>
      <div
        style={{
          width: "36px",
          borderRadius: "0px 5px 5px 0px",
          backgroundColor: "#f5f5f5",
          border: "1px solid #d9d9d9",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "8px 9px",
          gap: "4px",
          fontSize: "16px",
          color: "#262626",
        }}
      >
        <img
          style={{ height: "16px", width: "16px", position: "relative" }}
          alt=""
          src="/icon--outline--search.svg"
        />
        <div
          style={{
            width: "51px",
            position: "relative",
            lineHeight: "24px",
            display: "none",
            whiteSpace: "nowrap",
          }}
        >
          Button
        </div>
      </div>
    </div>
  );
};

InputSearch.propTypes = {
  className: PropTypes.string,
};

export default InputSearch;