import TopNavbar from "../components/TopNavbar";
import Header from "../components/Header";
import SidebarMenuUserPortalVPNS from "../components/SidebarMenuUserPortalVPNS";
import Dashboard from "../components/Dashboard";

const UserKhngCBtKQuynG = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1080px",
        position: "relative",
        backgroundColor: "#fafafa",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "332px",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
    >
      <TopNavbar />
      <main
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "20px",
          flexShrink: "0",
          maxWidth: "100%",
        }}
      >
        <Header />
        <section
          style={{
            alignSelf: "stretch",
            height: "1000px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 27px 591px 0px",
            boxSizing: "border-box",
            gap: "13px",
            maxWidth: "100%",
          }}
        >
          <SidebarMenuUserPortalVPNS />
          <Dashboard />
        </section>
      </main>
    </div>
  );
};

export default UserKhngCBtKQuynG;