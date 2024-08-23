import { FunctionComponent } from "react";
import InputSearch from "./InputSearch";
import "./TopNavbar.css";

export type TopNavbarType = {
  className?: string;
};

const TopNavbar: FunctionComponent<TopNavbarType> = ({ className = "" }) => {
  return (
    <header className={`top-navbar ${className}`}>
      <img className="base-icon" alt="" src="/base.svg" />
      <div className="user-dropdown">
        <img className="menu-hamburger-icon" alt="" src="/menu-hamburger.svg" />
        <div className="logo-container">
          <img className="fpt-cloud-logo" alt="" src="/fpt-cloud-logo.svg" />
        </div>
        <div className="dropdown-trigger">
          <div className="dropdown">
            <img className="dropdown-child" alt="" src="/rectangle-683.svg" />
            <div className="dropdown-items">
              <div className="dropdown-item">
                <div className="avatar">
                  <img className="base-icon1" alt="" src="/base-1.svg" />
                  <div className="dw">DW</div>
                </div>
                <div className="dropdown-item-tenant">
                  <div className="tenant-fci-container">
                    <span className="tenant">{`Tenant: `}</span>
                    <span>FCI - ORG</span>
                  </div>
                  <div className="general-team">general team</div>
                </div>
              </div>
            </div>
            <div className="button-icon">
              <img
                className="px-navigation-unfold-more"
                alt=""
                src="/18px--navigation--unfold-more.svg"
              />
            </div>
          </div>
        </div>
        <div className="dropdown-trigger">
          <div className="dropdown1">
            <img className="dropdown-child" alt="" src="/rectangle-683.svg" />
            <div className="dropdown-items">
              <div className="dropdown-item">
                <div className="avatar">
                  <img className="base-icon1" alt="" src="/base-1.svg" />
                  <div className="dw">DW</div>
                </div>
                <div className="dropdown-item-tenant">
                  <div className="region-hanoi">
                    <span className="tenant">{`Region: `}</span>
                    <span>Hanoi</span>
                  </div>
                  <div className="general-team">general team</div>
                </div>
              </div>
            </div>
            <div className="button-icon">
              <img
                className="px-navigation-unfold-more"
                alt=""
                src="/18px--navigation--unfold-more.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="user-profile">
        <div className="user-actions">
          <InputSearch />
          <div className="notification-icon-wrapper">
            <div className="notification-icon">
              <div className="button2">
                <img className="bell-icon" alt="" src="/bell-icon.svg" />
                <div className="documentation">Documentation</div>
              </div>
            </div>
          </div>
          <div className="tabler-icon-bell-wrapper">
            <div className="tabler-icon-bell">
              <img className="vector-icon" alt="" src="/vector-1.svg" />
              <div className="badge">
                <div className="div">1</div>
              </div>
            </div>
          </div>
          <div className="user-info">
            <div className="user-name">
              <a className="quang-khanh">Đỗ Quang Khánh</a>
              <div className="user-menu">
                <img className="icon" alt="" src="/icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
