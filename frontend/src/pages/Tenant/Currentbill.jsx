import TNavbar from "../../components/Tenant/TNavbar";
import TSidebar from "../../components/Tenant/TSidebar";
import ThemeContextProvider from "../../context/ThemeContextProvider";
import CurrentInvoice from "../../components/Tenant/CurrentInvoice";

const Currentbill = () => {
  return (
    <ThemeContextProvider>
      <div className="flex">
        <TSidebar />
        <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
          <TNavbar />
          <CurrentInvoice />
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default Currentbill;
