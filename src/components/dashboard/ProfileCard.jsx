import Image from "next/image";

const UserProfileCard = () => {
  const user = {
    name: "Sujon Sheikh",
    email: "sujonsheikh.dev@gmail.com",
    phone: "01999-986919",
    address: "123 Main St, Anytown, USA",
    avatar: "https://via.placeholder.com/150",
  };
  return (
    <div className="bg-white shadow rounded-lg p-4 border-2 max-w-sm mx-auto">
      <div className="flex items-center mb-4">
        <Image
          src={user.avatar}
          width={500}
          height={500}
          alt={`${user.name}'s avatar`}
          className="w-16 h-16 rounded-full border-2 border-gray-300"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <span className="text-gray-600">Phone:</span>
          <span className="ml-2 text-gray-800">{user.phone}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-600">Address:</span>
          <span className="ml-2 text-gray-800">{user.address}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
