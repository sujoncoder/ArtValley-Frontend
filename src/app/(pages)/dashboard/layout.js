import Sidebar from "@/components/dashboard/SideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex items-center">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
