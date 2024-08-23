import PropTypes from "prop-types";
import "./EmptyIllustration.css";

const EmptyIllustration = ({ className = "" }) => {
  return (
    <img
      className={`empty-illustration-icon ${className}`}
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
