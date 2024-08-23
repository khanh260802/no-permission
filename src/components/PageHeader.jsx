import PropTypes from "prop-types";
import "./PageHeader.css";

const PageHeader = ({ className = "" }) => {
  return (
    <div className={`page-header ${className}`}>
      <div className="heading-breadcrumb">
        <div className="header1">
          <div className="breadcrumb-parent">
            <a className="breadcrumb">Home</a>
            <div className="title-parent">
              <div className="title">
                <img
                  className="icon39"
                  loading="lazy"
                  alt=""
                  src="/icon-31.svg"
                />
                <h2 className="title1">VPN Site-to-Site</h2>
              </div>
              <div className="subtext">Manage all VPN Site-to-Site in VPC</div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-parent">
        <div className="cta">
          <div className="button3">Refresh</div>
        </div>
        <div className="cta1">
          <div className="button4">Create VPN connection</div>
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
};

export default PageHeader;
