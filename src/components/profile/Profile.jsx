import Link from "next/link";

const Profile = ({ onUser }) => {
  return (
    <Link href="/dashboard">
      <div className="w-9 h-9 flex justify-center items-center border-2 border-blue-500 cursor-pointer rounded-full bg-orange-500 hover:brightness-90 duration-300">
        <span className="font-bold text-3xl text-slate-500 p-1">
          {onUser?.user?.name.charAt(0).toUpperCase()}
        </span>
      </div>
    </Link>
  );
};

export default Profile;
