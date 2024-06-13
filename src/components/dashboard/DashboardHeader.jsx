const DashboardHeader = ({ username }) => {
  return (
    <div className="flex justify-between items-center p-5 bg-white shadow-md">
      <div className="text-xl font-semibold">Order List</div>
      <div className="text-lg">{username}</div>
    </div>
  );
};

export default DashboardHeader;
