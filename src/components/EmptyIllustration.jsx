import PropTypes from "prop-types";

const EmptyIllustration = ({ className = "" }) => {
  return (
    <img
      style={{
        position: "absolute",
        top: "28px",
        left: "508px",
        width: "120px",
        height: "180px",
        overflow: "hidden",
        zIndex: "1",
      }}
      className={className}
      loading="lazy"
      alt=""
      src="/empty-illustration.svg"
    />
  );
};

EmptyIllustration.propTypes = {
  className: PropTypes.string,
};

export default EmptyIllustration;