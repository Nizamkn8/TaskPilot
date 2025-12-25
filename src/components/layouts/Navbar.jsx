import { FaBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { logoutUser } from "../../features/auth/auth";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <header
      className="
        fixed top-0 right-0 z-40
        w-full md:w-[calc(100%-250px)]
        bg-gray-600
      "
    >
      <div className="flex items-center h-[70px] gap-3 px-4 md:px-10 justify-between">
        {/* 🔹 Mobile menu button */}
        <button className="md:hidden text-white" onClick={onMenuClick}>
          <FiMenu size={22} />
        </button>

        {/* 🔹 Search */}
        <input
          className="
    hidden md:block
    h-[45px] w-full
    bg-white text-black
    px-4 py-2 rounded-lg
    focus:outline-none
  "
          type="text"
          placeholder="Search..."
        />

        {/* 🔹 Actions */}
        <div className="flex items-center gap-4">
          <FaBell className="text-xl text-white hover:text-blue-500 cursor-pointer" />
          <button
            onClick={handleLogout}
            className="text-white hover:text-red-400 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
