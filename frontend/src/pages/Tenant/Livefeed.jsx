import TCard from '../../components/Tenant/TCard';
import TNavbar from "../../components/Tenant/TNavbar";
import TSidebar from "../../components/Tenant/TSidebar";
import ThemeContextProvider from "../../context/ThemeContextProvider";

const LiveFeed = () => {
  return (
    <ThemeContextProvider>
      <div className="flex">
        <TSidebar />
        <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
          <TNavbar />
          <div className="flex justify-center items-center p-8 text-gray-900 dark:bg-gray-900 dark:bg-cover dark:bg-center dark:text-white min-h-screen">
            <div className="w-full max-w-2xl h-[80vh]">
              {/* <h2 className="text-2xl mb-4"></h2> */}
              <TCard liters={50} maxLiters={100}   bill="" dueDate="" />
            </div>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default LiveFeed;
