import PropTypes from "prop-types";

const SidebarMenuUserPortalVPNS = ({ className = "" }) => {
  return (
    <div
      style={{
        width: "280px",
        boxShadow: "0px 4px 8px rgba(0, 82, 204, 0.15)",
        borderRadius: "4px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "16px 20px 29px 0px",
        boxSizing: "border-box",
        gap: "12px",
        textAlign: "left",
        fontSize: "14px",
        color: "#595959",
        fontFamily: "'Open Sans'",
      }}
      className={className}
    >
      <div
        style={{
          height: "582px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "40px",
            position: "relative",
            borderRadius: "0px 4px 4px 0px",
            backgroundColor: "#0052cc",
          }}
        />
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "24px",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "232px",
                height: "1px",
                position: "relative",
                backgroundColor: "#d9d9d9",
                display: "none",
              }}
            />
            <a
              style={{
                textDecoration: "none",
                position: "relative",
                lineHeight: "22px",
                fontWeight: "600",
                color: "#8c8c8c",
                display: "inline-block",
                minWidth: "64px",
              }}
            >
              Overview
            </a>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                    minHeight: "24px",
                  }}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolshomeoutlinerounded.svg"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      color: "inherit",
                      display: "inline-block",
                      minWidth: "41px",
                    }}
                  >
                    Home
                  </a>
                </div>
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "6.04%",
                  top: "32.5%",
                  right: "5.17%",
                  bottom: "32.5%",
                  left: "88.79%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  display: "none",
                }}
                alt=""
                src="/icon1.svg"
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "contain",
                    minHeight: "24px",
                  }}
                  loading="lazy"
                  alt=""
                  src="/horizontalbarchart@2x.png"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "126px",
                    }}
                  >
                    Tenant Dashboard
                  </div>
                </div>
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "6.04%",
                  top: "32.5%",
                  right: "5.17%",
                  bottom: "32.5%",
                  left: "88.79%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  display: "none",
                }}
                alt=""
                src="/icon1.svg"
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                padding: "8px 12px 8px 16px",
                position: "relative",
                gap: "20px",
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
              />
              <img
                style={{
                  height: "12px",
                  width: "12px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "none",
                  zIndex: "1",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/icon-1.svg"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "27px",
                    }}
                  >
                    IAM
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "5px 0px 0px",
                }}
              >
                <img
                  style={{
                    width: "14.5px",
                    height: "14px",
                    position: "relative",
                    zIndex: "1",
                  }}
                  alt=""
                  src="/icon1.svg"
                />
              </div>
              <img
                style={{
                  height: "16px",
                  width: "16px",
                  position: "relative",
                  objectFit: "contain",
                  display: "none",
                  zIndex: "4",
                }}
                alt=""
                src="/icon2@2x.png"
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    minHeight: "24px",
                  }}
                  alt=""
                />
                <div
                  style={{
                    width: "39px",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                    display: "inline-block",
                  }}
                >
                  Users
                </div>
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "6.04%",
                  top: "32.5%",
                  right: "5.17%",
                  bottom: "32.5%",
                  left: "88.79%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  display: "none",
                }}
                alt=""
                src="/icon1.svg"
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat@2x.png"
                />
                <input
                  style={{
                    margin: "0",
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    minHeight: "24px",
                  }}
                  type="checkbox"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  Groups
                </div>
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "6.04%",
                  top: "32.5%",
                  right: "5.17%",
                  bottom: "32.5%",
                  left: "88.79%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  display: "none",
                }}
                alt=""
                src="/icon1.svg"
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    minHeight: "24px",
                  }}
                  alt=""
                />
                <div
                  style={{
                    width: "37px",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                    display: "inline-block",
                  }}
                >
                  Roles
                </div>
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "6.04%",
                  top: "32.5%",
                  right: "5.17%",
                  bottom: "32.5%",
                  left: "88.79%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  display: "none",
                }}
                alt=""
                src="/icon1.svg"
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                  borderRadius: "10px",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                }}
                alt=""
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--graph.svg"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    minHeight: "24px",
                  }}
                  loading="lazy"
                  alt=""
                  src="/icon-6.svg"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "93px",
                    }}
                  >
                    Tenant Billing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: "1px",
                position: "relative",
                backgroundColor: "#d9d9d9",
              }}
            />
            <div
              style={{
                position: "relative",
                lineHeight: "22px",
                fontWeight: "600",
                color: "#8c8c8c",
                display: "inline-block",
                minWidth: "120px",
              }}
            >
              Compute services
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                padding: "2px 0px 2px 16px",
                position: "relative",
                opacity: "0.75",
                gap: "20px",
                textAlign: "center",
                fontSize: "12px",
                color: "rgba(24, 24, 25, 0.9)",
                fontFamily: "Roboto",
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
                src="/rectangle-683-2.svg"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "5px 0px 0px",
                }}
              >
                <div
                  style={{
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
                        position: "relative",
                        lineHeight: "22px",
                        fontWeight: "600",
                        display: "inline-block",
                        minWidth: "118px",
                      }}
                    >
                      VPC: FCI-01 Cloud
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
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                  borderRadius: "10px",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                }}
                alt=""
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--graph.svg"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "contain",
                    minHeight: "24px",
                  }}
                  loading="lazy"
                  alt=""
                  src="/horizontalbarchart-1@2x.png"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "105px",
                    }}
                  >
                    VPC Dashboard
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    minHeight: "24px",
                  }}
                  loading="lazy"
                  alt=""
                  src="/icon-6.svg"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "72px",
                    }}
                  >
                    VPC Billing
                  </div>
                </div>
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "6.04%",
                  top: "32.5%",
                  right: "5.17%",
                  bottom: "32.5%",
                  left: "88.79%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  display: "none",
                }}
                alt=""
                src="/icon3.svg"
              />
            </div>
            <Select
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                borderRadius: "4px",
                backgroundColor: "transparent",
                border: "none",
                padding: "9px 56px",
                boxSizing: "border-box",
                fontFamily: "'Open Sans'",
                fontWeight: "600",
                fontSize: "14px",
                color: "#595959",
              }}
            />
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                display: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
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
                />
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 6px)",
                    right: "12px",
                    width: "12px",
                    height: "12px",
                    overflow: "hidden",
                    display: "none",
                  }}
                  alt=""
                  src="/12px--navigation--arrow-right.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                      position: "relative",
                      objectFit: "cover",
                      display: "none",
                      minHeight: "24px",
                    }}
                    alt=""
                    src="/24px--iconly--chat1@2x.png"
                  />
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                      position: "relative",
                      objectFit: "cover",
                      minHeight: "24px",
                    }}
                    alt=""
                    src="/icon-10@2x.png"
                  />
                  <div
                    style={{
                      flex: "1",
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                    }}
                  >
                    Instances
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                display: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
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
                />
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 6px)",
                    right: "12px",
                    width: "12px",
                    height: "12px",
                    overflow: "hidden",
                    display: "none",
                  }}
                  alt=""
                  src="/12px--navigation--arrow-right.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                      position: "relative",
                      objectFit: "cover",
                      display: "none",
                      minHeight: "24px",
                    }}
                    alt=""
                    src="/24px--iconly--chat1@2x.png"
                  />
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                      position: "relative",
                      objectFit: "cover",
                      minHeight: "24px",
                    }}
                    alt=""
                    src="/icon-10@2x.png"
                  />
                  <div
                    style={{
                      flex: "1",
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                    }}
                  >
                    SSH Key Profile
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                display: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
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
                />
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 6px)",
                    right: "12px",
                    width: "12px",
                    height: "12px",
                    overflow: "hidden",
                    display: "none",
                  }}
                  alt=""
                  src="/12px--navigation--arrow-right.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                      position: "relative",
                      objectFit: "cover",
                      display: "none",
                      minHeight: "24px",
                    }}
                    alt=""
                    src="/24px--iconly--chat1@2x.png"
                  />
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                      position: "relative",
                      objectFit: "cover",
                      minHeight: "24px",
                    }}
                    alt=""
                    src="/icon-10@2x.png"
                  />
                  <div
                    style={{
                      flex: "1",
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                    }}
                  >
                    Storage Disks
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >{`Backup & Recovery`}</div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  Custom Images
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                display: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
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
                />
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 6px)",
                    right: "12px",
                    width: "12px",
                    height: "12px",
                    overflow: "hidden",
                    display: "none",
                  }}
                  alt=""
                  src="/12px--navigation--arrow-right.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                      position: "relative",
                      objectFit: "cover",
                      display: "none",
                      minHeight: "24px",
                    }}
                    alt=""
                    src="/24px--iconly--chat1@2x.png"
                  />
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                      position: "relative",
                      objectFit: "cover",
                      minHeight: "24px",
                    }}
                    alt=""
                    src="/icon-10@2x.png"
                  />
                  <div
                    style={{
                      flex: "1",
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                    }}
                  >
                    GPU Services
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  Autoscale Groups
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  Autoscale Profiles
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  Autoscale Policies
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                color: "#0052cc",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
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
                />
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 6px)",
                    right: "12px",
                    width: "12px",
                    height: "12px",
                    overflow: "hidden",
                    display: "none",
                  }}
                  alt=""
                  src="/12px--navigation--arrow-right.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "16px",
                    zIndex: "1",
                  }}
                >
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                      position: "relative",
                      objectFit: "cover",
                      display: "none",
                      minHeight: "24px",
                    }}
                    alt=""
                    src="/24px--iconly--chat1@2x.png"
                  />
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                      position: "relative",
                      minHeight: "24px",
                    }}
                    loading="lazy"
                    alt=""
                    src="/icon-18.svg"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "1px 0px 0px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "22px",
                        fontWeight: "600",
                        display: "inline-block",
                        minWidth: "80px",
                      }}
                    >
                      Networking
                    </div>
                  </div>
                </div>
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "40%",
                  width: "6.67%",
                  top: "30%",
                  right: "4.58%",
                  bottom: "30%",
                  left: "88.75%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  objectFit: "contain",
                  zIndex: "2",
                }}
                loading="lazy"
                alt=""
                src="/icon-19@2x.png"
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  loading="lazy"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "71px",
                    }}
                  >
                    Floating IP
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  loading="lazy"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "108px",
                    }}
                  >
                    Security Groups
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  loading="lazy"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "103px",
                    }}
                  >
                    Load Balancers
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  loading="lazy"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "77px",
                    }}
                  >
                    Certificates
                  </div>
                </div>
              </div>
            </div>
            <button
              style={{
                cursor: "pointer",
                border: "none",
                padding: "0",
                backgroundColor: "#0052cc",
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                borderRadius: "4px",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      fontSize: "14px",
                      lineHeight: "22px",
                      fontWeight: "600",
                      fontFamily: "'Open Sans'",
                      color: "#fff",
                      textAlign: "left",
                      display: "inline-block",
                      minWidth: "106px",
                    }}
                  >
                    VPN Site-to-Site
                  </div>
                </div>
              </div>
            </button>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  loading="lazy"
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "55px",
                    }}
                  >
                    Subnets
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Select
                style={{
                  height: "40px",
                  flex: "1",
                  borderRadius: "4px",
                  backgroundColor: "transparent",
                  border: "none",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "9px 12px 8px 16px",
                  boxSizing: "border-box",
                  fontFamily: "'Open Sans'",
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#595959",
                }}
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    minHeight: "24px",
                  }}
                  alt=""
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  Kubernetes
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  Database
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    minHeight: "24px",
                  }}
                  alt=""
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  Container Registry
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/icon-10@2x.png"
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  Platform Monitor
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
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
                />
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 6px)",
                    right: "12px",
                    width: "12px",
                    height: "12px",
                    overflow: "hidden",
                    display: "none",
                  }}
                  alt=""
                  src="/12px--navigation--arrow-right.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "16px",
                    zIndex: "1",
                  }}
                >
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                      position: "relative",
                      objectFit: "cover",
                      display: "none",
                      minHeight: "24px",
                    }}
                    alt=""
                    src="/24px--iconly--chat1@2x.png"
                  />
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                      position: "relative",
                      objectFit: "cover",
                      minHeight: "24px",
                    }}
                    alt=""
                    src="/-firewall@2x.png"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "1px 0px 0px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "22px",
                        fontWeight: "600",
                        display: "inline-block",
                        minWidth: "55px",
                      }}
                    >
                      Security
                    </div>
                  </div>
                </div>
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "40%",
                  width: "6.67%",
                  top: "30%",
                  right: "5.83%",
                  bottom: "30%",
                  left: "87.5%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  objectFit: "contain",
                  display: "none",
                }}
                alt=""
                src="/icon2@2x.png"
              />
              <img
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "6.04%",
                  top: "32.5%",
                  right: "5.17%",
                  bottom: "32.5%",
                  left: "88.79%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  zIndex: "2",
                }}
                alt=""
                src="/icon1.svg"
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    minHeight: "24px",
                  }}
                  alt=""
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  Cloud WAF
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    minHeight: "24px",
                  }}
                  alt=""
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  Cloud Guard
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    minHeight: "24px",
                  }}
                  alt=""
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  Activity Log
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
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
                />
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 6px)",
                    right: "12px",
                    width: "12px",
                    height: "12px",
                    overflow: "hidden",
                    display: "none",
                  }}
                  alt=""
                  src="/12px--navigation--arrow-right.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "16px",
                    zIndex: "1",
                  }}
                >
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                      position: "relative",
                      objectFit: "cover",
                      display: "none",
                      minHeight: "24px",
                    }}
                    alt=""
                    src="/24px--iconly--chat1@2x.png"
                  />
                  <img
                    style={{
                      height: "24px",
                      width: "24px",
                      position: "relative",
                      objectFit: "cover",
                      minHeight: "24px",
                    }}
                    alt=""
                    src="/icon--outline--endpoint-2@2x.png"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "1px 0px 0px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "22px",
                        fontWeight: "600",
                        display: "inline-block",
                        minWidth: "71px",
                      }}
                    >
                      API Access
                    </div>
                  </div>
                </div>
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "40%",
                  width: "6.67%",
                  top: "30%",
                  right: "5.83%",
                  bottom: "30%",
                  left: "87.5%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  objectFit: "contain",
                  display: "none",
                }}
                alt=""
                src="/icon2@2x.png"
              />
              <img
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "6.04%",
                  top: "32.5%",
                  right: "5.17%",
                  bottom: "32.5%",
                  left: "88.79%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  zIndex: "2",
                }}
                alt=""
                src="/icon1.svg"
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                    minHeight: "24px",
                  }}
                  alt=""
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  API Profiles
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                    minHeight: "24px",
                  }}
                  alt=""
                />
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  Key Vault
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                    minHeight: "24px",
                  }}
                  alt=""
                />
                <div
                  style={{
                    width: "49px",
                    position: "relative",
                    lineHeight: "22px",
                    fontWeight: "600",
                    display: "inline-block",
                  }}
                >
                  Tokens
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "232px",
                height: "1px",
                position: "relative",
                backgroundColor: "#d9d9d9",
              }}
            />
            <div
              style={{
                position: "relative",
                lineHeight: "22px",
                fontWeight: "600",
                color: "#8c8c8c",
                display: "inline-block",
                minWidth: "107px",
              }}
            >
              Add-on services
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  width: "140px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/icon--outline--object-storage@2x.png"
                />
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "22px",
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                    }}
                  >
                    Object Storage
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  width: "101px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/icon--outline--endpoint-security@2x.png"
                />
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "22px",
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                    }}
                  >
                    Cloud VA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "232px",
                height: "1px",
                position: "relative",
                backgroundColor: "#d9d9d9",
              }}
            />
            <div
              style={{
                width: "55px",
                height: "22px",
                position: "relative",
                lineHeight: "22px",
                fontWeight: "600",
                color: "#8c8c8c",
                display: "inline-block",
              }}
            >
              Support
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  borderRadius: "4px",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
                alt=""
              />
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                  borderRadius: "4px",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  zIndex: "1",
                }}
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16.6px",
                  width: "139.7px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "12px",
                  zIndex: "2",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--graph.svg"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "contain",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/horizontalbarchart1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/ic-fluent-chat-bubbles-question-24-regular-1.svg"
                />
                <div
                  style={{
                    width: "63px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "22px",
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                    }}
                  >
                    Helpdesk
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  borderRadius: "4px",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
                alt=""
              />
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                  borderRadius: "4px",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  zIndex: "1",
                }}
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16.6px",
                  width: "139.7px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 5px 0px 0px",
                  boxSizing: "border-box",
                  gap: "12px",
                  zIndex: "2",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--graph.svg"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "contain",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/horizontalbarchart1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/icon--outline--start.svg"
                />
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "22px",
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                    }}
                  >
                    Support Ticket
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: "40px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
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
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  right: "12px",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                  display: "none",
                }}
                alt=""
                src="/12px--navigation--arrow-right.svg"
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 12px)",
                  left: "16px",
                  width: "149px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "12px",
                  zIndex: "1",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    objectFit: "cover",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/24px--iconly--chat1@2x.png"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    display: "none",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/icon4.svg"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    minHeight: "24px",
                  }}
                  alt=""
                  src="/icon--outline--documents.svg"
                />
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "22px",
                      position: "relative",
                      lineHeight: "22px",
                      fontWeight: "600",
                      display: "inline-block",
                    }}
                  >
                    Documentations
                  </div>
                </div>
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "35%",
                  width: "6.04%",
                  top: "32.5%",
                  right: "5.17%",
                  bottom: "32.5%",
                  left: "88.79%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  objectFit: "contain",
                  display: "none",
                }}
                alt=""
                src="/icon5@2x.png"
              />
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