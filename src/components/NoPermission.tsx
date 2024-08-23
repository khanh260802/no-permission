import PropTypes from "prop-types";
import "./NoPermission.css";

const NoPermission = ({ className = "" }) => {
  return (
    <div className={`no-permission ${className}`}>
      <div className="authen-illustration">
        <div className="graphic">
          <img className="vector-icon1" alt="" src="/vector-2.svg" />
          <img className="vector-icon2" alt="" src="/vector-3.svg" />
          <img className="vector-icon3" alt="" src="/vector-4.svg" />
          <img className="vector-icon4" alt="" src="/vector-5.svg" />
          <img className="vector-icon5" alt="" src="/vector-6.svg" />
          <img className="vector-icon6" alt="" src="/vector-7.svg" />
          <img className="vector-icon7" alt="" src="/vector-8.svg" />
          <img className="vector-icon8" alt="" src="/vector-9.svg" />
          <img className="vector-icon9" alt="" src="/vector-10.svg" />
          <img className="vector-icon10" alt="" src="/vector-11.svg" />
          <img className="vector-icon11" alt="" src="/vector-12.svg" />
          <img className="vector-icon12" alt="" src="/vector-10.svg" />
          <img className="vector-icon13" alt="" src="/vector-14.svg" />
          <img className="vector-icon14" alt="" src="/vector-15.svg" />
          <img className="vector-icon15" alt="" src="/vector-16.svg" />
          <img className="graphic-child" alt="" src="/group-625972.svg" />
          <img className="vector-icon16" alt="" src="/vector-17.svg" />
          <img className="vector-icon17" alt="" src="/vector-18.svg" />
          <img className="vector-icon18" alt="" src="/vector-19.svg" />
          <img className="vector-icon19" alt="" src="/vector-20.svg" />
          <img className="graphic-item" alt="" src="/group-625974.svg" />
          <div className="frame-parent">
            <img className="frame-item" alt="" src="/group-625973.svg" />
            <div className="div1">!</div>
          </div>
        </div>
      </div>
      <div className="permission-container">
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
    </div>
  );
};

NoPermission.propTypes = {
  className: PropTypes.string,
};

export default NoPermission;
