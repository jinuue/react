import { FaMoon, FaSun } from "react-icons/fa6";
import { ThemeContxt } from "../context/ThemeContextProvider";
import { useContext } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContxt);

  return (
    <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white pl-8'>
      <h1></h1>
      <button className="text-2xl sm:text-xl text-dark" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default Navbar;
