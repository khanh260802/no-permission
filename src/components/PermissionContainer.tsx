import PropTypes from "prop-types";
import "./PermissionContainer.css";

const PermissionContainer = ({ className = "" }) => {
  return (
    <div className={`permission-container ${className}`}>
      <div className="permission-content">
        <div className="no-permission-to-access-wrapper">
          <h2 className="no-permission-to">No permission to access.</h2>
        </div>
        <div className="sorry-you-do-not-have-suffici-wrapper">
          <div className="sorry-you-do-container">
            <p className="sorry-you-do">{`Sorry, you do not have sufficient permissions to `}</p>
            <p className="sorry-you-do">view this page.</p>
          </div>
        </div>
      </div>
      <button className="report-button">
        <b className="get-report">Contact us</b>
      </button>
    </div>
  );
};

PermissionContainer.propTypes = {
  className: PropTypes.string,
};

export default PermissionContainer;
