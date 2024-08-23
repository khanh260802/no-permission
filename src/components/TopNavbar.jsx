import InputSearch from "./InputSearch";
import PropTypes from "prop-types";

const TopNavbar = ({ className = "" }) => {
  return (
    <header
      style={{
        marginTop: "-396px",
        marginLeft: "-358px",
        width: "1920px",
        boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.08)",
        borderRadius: "4px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "0px 24px 0px 0px",
        boxSizing: "border-box",
        position: "sticky",
        flexShrink: "0",
        top: "-396",
        zIndex: "99",
        gap: "20px",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "12px",
        color: "rgba(24, 24, 25, 0.9)",
        fontFamily: "Roboto",
      }}
      className={className}
    >
      <img
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          margin: "0",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        alt=""
        src="/base.svg"
      />
      <div
        style={{
          width: "584px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "24px",
          maxWidth: "100%",
          zIndex: "1",
        }}
      >
        <img
          style={{ height: "64px", width: "64px", position: "relative" }}
          alt=""
          src="/menu-hamburger.svg"
        />
        <div
          style={{
            width: "128px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "20.9px 0px 0px",
            boxSizing: "border-box",
          }}
        >
          <img
            style={{
              alignSelf: "stretch",
              height: "22.2px",
              position: "relative",
              maxWidth: "100%",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/fpt-cloud-logo.svg"
          />
        </div>
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "14px 0px 0px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "2px 0px 2px 8px",
              position: "relative",
              gap: "3px",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                margin: "0",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                borderRadius: "4px",
                maxWidth: "100%",
                overflow: "hidden",
                maxHeight: "100%",
              }}
              alt=""
              src="/rectangle-683.svg"
            />
            <div
              style={{
                height: "27px",
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "5px 0px 0px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  flex: "1",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "12px",
                  zIndex: "1",
                }}
              >
                <div
                  style={{
                    height: "32px",
                    width: "32px",
                    position: "relative",
                    display: "none",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      top: "0%",
                      right: "0%",
                      bottom: "0%",
                      left: "0%",
                      maxWidth: "100%",
                      overflow: "hidden",
                      maxHeight: "100%",
                    }}
                    alt=""
                    src="/base-1.svg"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "25%",
                      left: "21.88%",
                      letterSpacing: "-0.3px",
                      lineHeight: "140%",
                      fontWeight: "500",
                    }}
                  >
                    DW
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    flex: "1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "1px",
                    textAlign: "left",
                    fontSize: "14px",
                    color: "#595959",
                    fontFamily: "'Open Sans'",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      flex: "1",
                      position: "relative",
                      lineHeight: "22px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>{`Tenant: `}</span>
                    <span>FCI - ORG</span>
                  </div>
                  <div
                    style={{
                      width: "67px",
                      position: "relative",
                      fontSize: "12px",
                      letterSpacing: "-0.3px",
                      lineHeight: "140%",
                      fontWeight: "500",
                      fontFamily: "Roboto",
                      color: "rgba(255, 255, 255, 0.42)",
                      display: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    general team
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "32px",
                borderRadius: "4px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "11px 7px",
                boxSizing: "border-box",
                zIndex: "1",
              }}
            >
              <img
                style={{
                  height: "18px",
                  width: "18px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/18px--navigation--unfold-more.svg"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "14px 0px 0px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "2px 0px 2px 16px",
              position: "relative",
              gap: "19px",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                margin: "0",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                borderRadius: "4px",
                maxWidth: "100%",
                overflow: "hidden",
                maxHeight: "100%",
              }}
              alt=""
              src="/rectangle-683.svg"
            />
            <div
              style={{
                height: "27px",
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "5px 0px 0px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  flex: "1",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "12px",
                  zIndex: "1",
                }}
              >
                <div
                  style={{
                    height: "32px",
                    width: "32px",
                    position: "relative",
                    display: "none",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      top: "0%",
                      right: "0%",
                      bottom: "0%",
                      left: "0%",
                      maxWidth: "100%",
                      overflow: "hidden",
                      maxHeight: "100%",
                    }}
                    alt=""
                    src="/base-1.svg"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "25%",
                      left: "21.88%",
                      letterSpacing: "-0.3px",
                      lineHeight: "140%",
                      fontWeight: "500",
                    }}
                  >
                    DW
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    flex: "1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "1px",
                    textAlign: "left",
                    fontSize: "14px",
                    color: "#595959",
                    fontFamily: "'Open Sans'",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      flex: "1",
                      position: "relative",
                      lineHeight: "22px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>{`Region: `}</span>
                    <span>Hanoi</span>
                  </div>
                  <div
                    style={{
                      width: "67px",
                      position: "relative",
                      fontSize: "12px",
                      letterSpacing: "-0.3px",
                      lineHeight: "140%",
                      fontWeight: "500",
                      fontFamily: "Roboto",
                      color: "rgba(255, 255, 255, 0.42)",
                      display: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    general team
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "32px",
                borderRadius: "4px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "11px 7px",
                boxSizing: "border-box",
                zIndex: "1",
              }}
            >
              <img
                style={{
                  height: "18px",
                  width: "18px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/18px--navigation--unfold-more.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "532px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "14px 0px 0px",
          boxSizing: "border-box",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "14px",
          color: "#595959",
          fontFamily: "'Open Sans'",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "16px",
            zIndex: "1",
          }}
        >
          <InputSearch />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "6px 0px 0px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  height: "24px",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 5px",
                  boxSizing: "border-box",
                  gap: "8px",
                }}
              >
                <img
                  style={{
                    height: "16px",
                    width: "14px",
                    position: "relative",
                  }}
                  alt=""
                  src="/bell-icon.svg"
                />
                <div
                  style={{
                    width: "106px",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                    display: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Documentation
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "6px 0px 0px",
              boxSizing: "border-box",
              textAlign: "center",
              fontSize: "12px",
              color: "#fff",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: "24px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 9px)",
                  left: "calc(50% - 8px)",
                  width: "16px",
                  height: "18px",
                }}
                alt=""
                src="/vector-1.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.08)",
                  borderRadius: "200px",
                  backgroundColor: "#2372d9",
                  width: "10px",
                  height: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: "1",
                }}
              >
                <div
                  style={{
                    width: "7px",
                    position: "relative",
                    lineHeight: "20px",
                    display: "none",
                  }}
                >
                  1
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              height: "29px",
              width: "136px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "7px 0px 0px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                flex: "1",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "8px",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  alignSelf: "stretch",
                  flex: "1",
                  position: "relative",
                  lineHeight: "22px",
                  color: "inherit",
                  whiteSpace: "nowrap",
                }}
              >
                Đỗ Quang Khánh
              </a>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "3px 0px 0px",
                }}
              >
                <img
                  style={{
                    width: "16px",
                    height: "16px",
                    position: "relative",
                  }}
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

TopNavbar.propTypes = {
  className: PropTypes.string,
};

export default TopNavbar;