import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import "./SidebarMenuUserPortalVPNS.css";

const SidebarMenuUserPortalVPNS = ({ className = "" }) => {
  return (
    <div className={`sidebar-menuuser-portalvpn-s ${className}`}>
      <div className="sidebar-indicator">
        <div className="indicator" />
      </div>
      <div className="menu-items-container">
        <div className="menu-group">
          <div className="org">
            <div className="line" />
            <a className="menu-header">Overview</a>
            <div className="menu">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="home-menu-item">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat@2x.png"
                />
                <img
                  className="material-symbolshome-outline-icon"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolshomeoutlinerounded.svg"
                />
                <div className="home-menu-label">
                  <a className="home">Home</a>
                </div>
              </div>
              <img className="icon1" alt="" src="/icon1.svg" />
            </div>
            <div className="menu">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="home-menu-item">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat@2x.png"
                />
                <img
                  className="horizontal-bar-chart-icon"
                  loading="lazy"
                  alt=""
                  src="/horizontalbarchart@2x.png"
                />
                <div className="home-menu-label">
                  <div className="tenant-dashboard">Tenant Dashboard</div>
                </div>
              </div>
              <img className="icon1" alt="" src="/icon1.svg" />
            </div>
            <div className="menu2">
              <img className="rectangle-icon" alt="" />
              <img
                className="px-navigation-arrow-right2"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-group">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat@2x.png"
                />
                <img
                  className="icon-outline-endpoint"
                  alt=""
                  src="/icon-1.svg"
                />
                <div className="home-menu-label">
                  <div className="iam">IAM</div>
                </div>
              </div>
              <div className="home-menu-badge">
                <img className="icon4" alt="" src="/icon1.svg" />
              </div>
              <img className="icon5" alt="" src="/icon2@2x.png" />
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat@2x.png"
                />
                <img className="icon-outline-endpoint" alt="" />
                <div className="users">Users</div>
              </div>
              <img className="icon1" alt="" src="/icon1.svg" />
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat@2x.png"
                />
                <input className="icon8" type="checkbox" />
                <div className="groups">Groups</div>
              </div>
              <img className="icon1" alt="" src="/icon1.svg" />
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat@2x.png"
                />
                <img className="icon-outline-endpoint" alt="" />
                <div className="roles">Roles</div>
              </div>
              <img className="icon1" alt="" src="/icon1.svg" />
            </div>
            <div className="row">
              <img className="base-icon9" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="home-menu-item">
                <img
                  className="px-iconly-graph"
                  alt=""
                  src="/24px--iconly--graph.svg"
                />
                <img
                  className="icon-outline-endpoint"
                  loading="lazy"
                  alt=""
                  src="/icon-6.svg"
                />
                <div className="home-menu-label">
                  <div className="tenant-billing">Tenant Billing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-group">
          <div className="org">
            <div className="line1" />
            <div className="menu-header1">Compute services</div>
            <div className="dropdown2">
              <img
                className="rectangle-icon"
                alt=""
                src="/rectangle-683-2.svg"
              />
              <div className="home-menu-badge">
                <div className="support-menu-dropdown-item">
                  <div className="avatar2">
                    <img className="base-icon10" alt="" src="/base-1.svg" />
                    <div className="dw2">DW</div>
                  </div>
                  <div className="support-menu-dropdown-item-con">
                    <div className="vpc-fci-01-cloud">VPC: FCI-01 Cloud</div>
                    <div className="general-team2">general team</div>
                  </div>
                </div>
              </div>
              <div className="button-icon2">
                <img
                  className="px-navigation-unfold-more2"
                  alt=""
                  src="/18px--navigation--unfold-more.svg"
                />
              </div>
            </div>
            <div className="row">
              <img className="base-icon9" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="home-menu-item">
                <img
                  className="px-iconly-graph"
                  alt=""
                  src="/24px--iconly--graph.svg"
                />
                <img
                  className="horizontal-bar-chart-icon"
                  loading="lazy"
                  alt=""
                  src="/horizontalbarchart-1@2x.png"
                />
                <div className="home-menu-label">
                  <div className="vpc-dashboard">VPC Dashboard</div>
                </div>
              </div>
            </div>
            <div className="menu">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="home-menu-item">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-endpoint"
                  loading="lazy"
                  alt=""
                  src="/icon-6.svg"
                />
                <div className="home-menu-label">
                  <div className="vpc-billing">VPC Billing</div>
                </div>
              </div>
              <img className="icon1" alt="" src="/icon3.svg" />
            </div>
            <TextField
              className="compute-engine-wrapper"
              variant="standard"
              select
              value={1}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    style={{ marginLeft: "16px", marginRight: "16px" }}
                  >
                    <img width="24px" height="24px" src="/icon-8.png" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    style={{ marginRight: "12.399999999999975px" }}
                  >
                    <img width="14.5px" height="14px" src="/icon-9.svg" />
                  </InputAdornment>
                ),
              }}
              SelectProps={{ IconComponent: () => null }}
              sx={{
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderRadius: "0px 0px 0px 0px",
                width: "100%",
                height: "40px",
                "& .MuiInput-underline:before": { borderBottom: "none" },
                "& .MuiInput-underline:after": { borderBottom: "none" },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottom: "none",
                },
                "& .MuiInputBase-root": { height: "100%" },
                "& .MuiInputBase-input": {
                  color: "#595959",
                  fontSize: 14,
                  fontWeight: "SemiBold",
                  fontFamily: "Open Sans",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <MenuItem value={1}>Compute Engine</MenuItem>
            </TextField>
            <div className="row-master-wrapper">
              <div className="row-master">
                <img className="base-icon3" alt="" />
                <img
                  className="px-navigation-arrow-right"
                  alt=""
                  src="/12px--navigation--arrow-right.svg"
                />
                <div className="px-iconly-chat-container">
                  <img
                    className="px-iconly-chat"
                    alt=""
                    src="/24px--iconly--chat1@2x.png"
                  />
                  <img
                    className="icon-outline-backup-servic"
                    alt=""
                    src="/icon-10@2x.png"
                  />
                  <div className="groups">Instances</div>
                </div>
              </div>
            </div>
            <div className="row-master-wrapper">
              <div className="row-master">
                <img className="base-icon3" alt="" />
                <img
                  className="px-navigation-arrow-right"
                  alt=""
                  src="/12px--navigation--arrow-right.svg"
                />
                <div className="px-iconly-chat-container">
                  <img
                    className="px-iconly-chat"
                    alt=""
                    src="/24px--iconly--chat1@2x.png"
                  />
                  <img
                    className="icon-outline-backup-servic"
                    alt=""
                    src="/icon-10@2x.png"
                  />
                  <div className="groups">SSH Key Profile</div>
                </div>
              </div>
            </div>
            <div className="row-master-wrapper">
              <div className="row-master">
                <img className="base-icon3" alt="" />
                <img
                  className="px-navigation-arrow-right"
                  alt=""
                  src="/12px--navigation--arrow-right.svg"
                />
                <div className="px-iconly-chat-container">
                  <img
                    className="px-iconly-chat"
                    alt=""
                    src="/24px--iconly--chat1@2x.png"
                  />
                  <img
                    className="icon-outline-backup-servic"
                    alt=""
                    src="/icon-10@2x.png"
                  />
                  <div className="groups">Storage Disks</div>
                </div>
              </div>
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div className="groups">{`Backup & Recovery`}</div>
              </div>
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div className="groups">Custom Images</div>
              </div>
            </div>
            <div className="row-master-wrapper">
              <div className="row-master">
                <img className="base-icon3" alt="" />
                <img
                  className="px-navigation-arrow-right"
                  alt=""
                  src="/12px--navigation--arrow-right.svg"
                />
                <div className="px-iconly-chat-container">
                  <img
                    className="px-iconly-chat"
                    alt=""
                    src="/24px--iconly--chat1@2x.png"
                  />
                  <img
                    className="icon-outline-backup-servic"
                    alt=""
                    src="/icon-10@2x.png"
                  />
                  <div className="groups">GPU Services</div>
                </div>
              </div>
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div className="groups">Autoscale Groups</div>
              </div>
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div className="groups">Autoscale Profiles</div>
              </div>
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div className="groups">Autoscale Policies</div>
              </div>
            </div>
            <div className="row-master-parent">
              <div className="row-master">
                <img className="base-icon3" alt="" />
                <img
                  className="px-navigation-arrow-right"
                  alt=""
                  src="/12px--navigation--arrow-right.svg"
                />
                <div className="home-menu-item">
                  <img
                    className="px-iconly-chat"
                    alt=""
                    src="/24px--iconly--chat1@2x.png"
                  />
                  <img
                    className="icon-outline-endpoint"
                    loading="lazy"
                    alt=""
                    src="/icon-18.svg"
                  />
                  <div className="home-menu-label">
                    <div className="networking">Networking</div>
                  </div>
                </div>
              </div>
              <img
                className="icon24"
                loading="lazy"
                alt=""
                src="/icon-19@2x.png"
              />
            </div>
            <div className="menu">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="home-menu-item">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  loading="lazy"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div className="home-menu-label">
                  <div className="floating-ip">Floating IP</div>
                </div>
              </div>
            </div>
            <div className="menu">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="home-menu-item">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  loading="lazy"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div className="home-menu-label">
                  <div className="security-groups">Security Groups</div>
                </div>
              </div>
            </div>
            <div className="menu">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="home-menu-item">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  loading="lazy"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div className="home-menu-label">
                  <div className="load-balancers">Load Balancers</div>
                </div>
              </div>
            </div>
            <div className="menu">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="home-menu-item">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  loading="lazy"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div className="home-menu-label">
                  <div className="certificates">Certificates</div>
                </div>
              </div>
            </div>
            <button className="row-master13">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="home-menu-item">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div className="home-menu-label">
                  <div className="vpn-site-to-site">VPN Site-to-Site</div>
                </div>
              </div>
            </button>
            <div className="menu">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="home-menu-item">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  loading="lazy"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div className="home-menu-label">
                  <div className="subnets">Subnets</div>
                </div>
              </div>
            </div>
            <div className="menu-group">
              <TextField
                className="row-master15"
                variant="standard"
                select
                value={1}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ marginLeft: "16px", marginRight: "16px" }}
                    >
                      <img
                        width="24px"
                        height="24px"
                        src="/icon--outline--application.png"
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ marginRight: "12.399999999999975px" }}
                    >
                      <img width="14.5px" height="14px" src="/icon-26.svg" />
                    </InputAdornment>
                  ),
                }}
                SelectProps={{ IconComponent: () => null }}
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "100%",
                  height: "40px",
                  "& .MuiInput-underline:before": { borderBottom: "none" },
                  "& .MuiInput-underline:after": { borderBottom: "none" },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottom: "none",
                  },
                  "& .MuiInputBase-root": { height: "100%" },
                  "& .MuiInputBase-input": {
                    color: "#595959",
                    fontSize: 14,
                    fontWeight: "SemiBold",
                    fontFamily: "Open Sans",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <MenuItem value={1}>Container Platform</MenuItem>
              </TextField>
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img className="icon-outline-endpoint" alt="" />
                <div className="groups">Kubernetes</div>
              </div>
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div className="groups">Database</div>
              </div>
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img className="icon-outline-endpoint" alt="" />
                <div className="groups">Container Registry</div>
              </div>
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div className="groups">Platform Monitor</div>
              </div>
            </div>
            <div className="row-master-group">
              <div className="row-master">
                <img className="base-icon3" alt="" />
                <img
                  className="px-navigation-arrow-right"
                  alt=""
                  src="/12px--navigation--arrow-right.svg"
                />
                <div className="home-menu-item">
                  <img
                    className="px-iconly-chat"
                    alt=""
                    src="/24px--iconly--chat1@2x.png"
                  />
                  <img
                    className="icon-outline-backup-servic"
                    alt=""
                    src="/-firewall@2x.png"
                  />
                  <div className="home-menu-label">
                    <div className="subnets">Security</div>
                  </div>
                </div>
              </div>
              <img className="icon31" alt="" src="/icon2@2x.png" />
              <img className="icon32" alt="" src="/icon1.svg" />
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img className="icon-outline-endpoint" alt="" />
                <div className="groups">Cloud WAF</div>
              </div>
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img className="icon-outline-endpoint" alt="" />
                <div className="groups">Cloud Guard</div>
              </div>
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img className="icon-outline-endpoint" alt="" />
                <div className="groups">Activity Log</div>
              </div>
            </div>
            <div className="row-master-group">
              <div className="row-master">
                <img className="base-icon3" alt="" />
                <img
                  className="px-navigation-arrow-right"
                  alt=""
                  src="/12px--navigation--arrow-right.svg"
                />
                <div className="home-menu-item">
                  <img
                    className="px-iconly-chat"
                    alt=""
                    src="/24px--iconly--chat1@2x.png"
                  />
                  <img
                    className="icon-outline-backup-servic"
                    alt=""
                    src="/icon--outline--endpoint-2@2x.png"
                  />
                  <div className="home-menu-label">
                    <div className="floating-ip">API Access</div>
                  </div>
                </div>
              </div>
              <img className="icon31" alt="" src="/icon2@2x.png" />
              <img className="icon32" alt="" src="/icon1.svg" />
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img className="material-symbolshome-outline-icon" alt="" />
                <div className="groups">API Profiles</div>
              </div>
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img className="material-symbolshome-outline-icon" alt="" />
                <div className="groups">Key Vault</div>
              </div>
            </div>
            <div className="menu3">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-container">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img className="material-symbolshome-outline-icon" alt="" />
                <div className="tokens">Tokens</div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-group">
          <div className="org">
            <div className="other-child" />
            <div className="add-on-services">Add-on services</div>
            <div className="menu">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="other-menu-item">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  alt=""
                  src="/icon--outline--object-storage@2x.png"
                />
                <div className="other-menu-item-label">
                  <div className="object-storage">Object Storage</div>
                </div>
              </div>
            </div>
            <div className="menu">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-parent31">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  className="icon-outline-backup-servic"
                  alt=""
                  src="/icon--outline--endpoint-security@2x.png"
                />
                <div className="other-menu-item-label">
                  <div className="object-storage">Cloud VA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-group">
          <div className="org">
            <div className="other-child" />
            <div className="support2">Support</div>
            <div className="row-master-group">
              <img className="row-icon" alt="" />
              <img className="base-icon43" alt="" />
              <div className="helpdesk-row">
                <img
                  className="px-iconly-graph"
                  alt=""
                  src="/24px--iconly--graph.svg"
                />
                <img
                  className="horizontal-bar-chart-icon2"
                  alt=""
                  src="/horizontalbarchart1@2x.png"
                />
                <img
                  className="material-symbolshome-outline-icon"
                  alt=""
                  src="/ic-fluent-chat-bubbles-question-24-regular-1.svg"
                />
                <div className="helpdesk-wrapper">
                  <div className="object-storage">Helpdesk</div>
                </div>
              </div>
            </div>
            <div className="row-master-group">
              <img className="row-icon" alt="" />
              <img className="base-icon43" alt="" />
              <div className="px-iconly-graph-group">
                <img
                  className="px-iconly-graph"
                  alt=""
                  src="/24px--iconly--graph.svg"
                />
                <img
                  className="horizontal-bar-chart-icon2"
                  alt=""
                  src="/horizontalbarchart1@2x.png"
                />
                <img
                  className="icon-outline-endpoint"
                  alt=""
                  src="/icon--outline--start.svg"
                />
                <div className="other-menu-item-label">
                  <div className="object-storage">Support Ticket</div>
                </div>
              </div>
            </div>
            <div className="menu">
              <img className="base-icon3" alt="" />
              <img
                className="px-navigation-arrow-right"
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div className="px-iconly-chat-parent32">
                <img
                  className="px-iconly-chat"
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img className="px-iconly-graph" alt="" src="/icon4.svg" />
                <img
                  className="icon-outline-endpoint"
                  alt=""
                  src="/icon--outline--documents.svg"
                />
                <div className="other-menu-item-label">
                  <div className="object-storage">Documentations</div>
                </div>
              </div>
              <img className="icon38" alt="" src="/icon5@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SidebarMenuUserPortalVPNS.propTypes = {
  className: PropTypes.string,
};

export default SidebarMenuUserPortalVPNS;
