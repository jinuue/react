import ThemeContextProvider from "../../context/ThemeContextProvider";
import TCard from "../../components/Tenant/TCard";
import TSidebar from "../../components/Tenant/TSidebar";
import TNavbar from "../../components/Tenant/TNavbar";

const Livefeed = () => {

  return (
    <ThemeContextProvider>
      <div className="flex">
        <TSidebar />
        <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
          <TNavbar />
          <div className="grow p-8 text-gray-900 dark:bg-gray-900 dark:bg-cover dark:bg-center dark:text-white min-h-screen">
            <h2 className="text-2xl mb-4"></h2>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default Livefeed;
