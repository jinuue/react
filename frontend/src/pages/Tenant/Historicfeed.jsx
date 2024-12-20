import { useState } from "react";
import MonthCard from "../../components/Tenant/MonthCard";
import TNavbar from "../../components/Tenant/TNavbar";
import TSidebar from "../../components/Tenant/TSidebar";
import ThemeContextProvider from "../../context/ThemeContextProvider";

// sample lang para makita design
const Historicfeed = () => {
  const months = [
    { month: "January", invoice: "Invoice data for January" },
    { month: "February", invoice: "Invoice data for February" },
    { month: "March", invoice: "Invoice data for March" },
  ];

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
              {months.map((monthData, index) => (
                <MonthCard
                  key={index}
                  month={monthData.month}
                  invoice={monthData.invoice}
                  index={index}
                  visibleInvoice={visibleInvoice}
                  onViewInvoice={handleViewInvoice}
                  onCloseInvoice={handleCloseInvoice}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default Historicfeed;
