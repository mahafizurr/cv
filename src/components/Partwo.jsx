import { userDataPartTwo } from "./userData";

const Partwo = () => {
  return (
    <div className="container mx-auto px-4">
      {userDataPartTwo.map((user, usIndex) => (
        <div key={usIndex} className="mx-auto my-8 p-6">
          <h2 className="text-xl font-bold mb-2">{user.fullName}</h2>
          <p className="text-lg mb-4">{user.title}</p>
          <p className="text-gray-600">{user.bio}</p>
          <p className="mt-4 text-sm italic text-gray-500">{user.experience}</p>
        </div>
      ))}
    </div>
  );
};

export default Partwo;
