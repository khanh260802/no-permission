import { FunctionComponent } from "react";
import PermissionContainer from "./PermissionContainer";
import "./NoPermission.css";

export type NoPermissionType = {
  className?: string;
};

const NoPermission: FunctionComponent<NoPermissionType> = ({
  className = "",
}) => {
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
      <PermissionContainer />
    </div>
  );
};

export default NoPermission;