import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-5">
      <div className="text-2xl font-bold mb-10">ArtValley</div>
      <ul>
        <li className="mb-5">
          <Link
            href="/dashboard"
            className="flex items-center text-lg text-gray-700"
          >
            <span className="ml-3">Profile</span>
          </Link>
        </li>
        <li className="mb-5">
          <Link
            href="/dashboard/user-orders"
            className="flex items-center text-lg text-gray-700"
          >
            <span className="ml-3">Orders</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
