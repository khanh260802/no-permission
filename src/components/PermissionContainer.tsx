import { FunctionComponent } from "react";
import "./PermissionContainer.css";

export type PermissionContainerType = {
  className?: string;
};

const PermissionContainer: FunctionComponent<PermissionContainerType> = ({
  className = "",
}) => {
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

export default PermissionContainer;