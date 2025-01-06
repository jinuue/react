import { useState } from "react";
import MonthCard from "../../components/Tenant/Historic/MonthCard";
import TNavbar from "../../components/Tenant/TNavbar";
import TSidebar from "../../components/Tenant/TSidebar";
import ThemeContextProvider from "../../context/ThemeContextProvider";

const Historicfeed = () => {
  const [visibleInvoice, setVisibleInvoice] = useState(null);

  const handleViewInvoice = (index) => {
    setVisibleInvoice(index);
  };

  const handleCloseInvoice = () => {
    setVisibleInvoice(null);
  };

  return (
    <ThemeContextProvider>
      <div className="min-h-screen min-w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
        <div className="flex flex-1">
          <TSidebar />
          <div className="grow ml-16 md:ml-64">
            <TNavbar />

            <div className="flex flex-col items-center p-4">
              <MonthCard
                visibleInvoice={visibleInvoice}
                onViewInvoice={handleViewInvoice}
                onCloseInvoice={handleCloseInvoice}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default Historicfeed;
