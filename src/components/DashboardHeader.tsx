import { FunctionComponent } from "react";
import PageHeader from "./PageHeader";
import "./DashboardHeader.css";

export type DashboardHeaderType = {
  className?: string;
};

const DashboardHeader: FunctionComponent<DashboardHeaderType> = ({
  className = "",
}) => {
  return (
    <div className={`dashboard-header ${className}`}>
      <PageHeader />
      <div className="tabs">
        <div className="tab-header">
          <div className="tab-item">
            <div className="vpn-connection">VPN connection</div>
          </div>
          <div className="tab-item1">
            <div className="customer-gateways">Customer gateways</div>
          </div>
          <div className="tab-item1">
            <div className="customer-gateways">IKE policies</div>
          </div>
          <div className="tab-item1">
            <div className="customer-gateways">IPSec policies</div>
          </div>
          <div className="tab-item4">
            <div className="tab-1">Other tab</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
