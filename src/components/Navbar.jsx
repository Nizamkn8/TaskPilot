import { FaBell } from "react-icons/fa";

const  Navbar = () => {
  return (
    <header className="absolute w-[calc(100%-250px)] right-0">
      <div className="flex items-center h-[70px] bg-gray-600  gap-3 px-10">
        <input className="h-[45px] w-full bg-white text-black px-4 py-2 rounded-lg focus:outline-0" type="text" />
        <div>
          <FaBell className="text-xl text-white hover:text-blue-500" />
        </div>
      </div>
    </header>
  );
}

export default Navbar
