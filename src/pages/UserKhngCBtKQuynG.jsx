import TopNavbar from "../components/TopNavbar";
import Header from "../components/Header";
import SidebarMenuUserPortalVPNS from "../components/SidebarMenuUserPortalVPNS";
import Dashboard from "../components/Dashboard";
import "./UserKhngCBtKQuynG.css";

const UserKhngCBtKQuynG = () => {
  return (
    <div className="user-khng-c-bt-k-quyn-g">
      <TopNavbar />
      <main className="page-content">
        <Header />
        <section className="sidebar-container">
          <SidebarMenuUserPortalVPNS />
          <Dashboard />
        </section>
      </main>
    </div>
  );
};

export default UserKhngCBtKQuynG;
