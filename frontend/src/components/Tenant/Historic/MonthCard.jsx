import { GrView, GrFormClose } from "react-icons/gr";
import { useState }  from "react";
import HistoricInvoice from "./HistoricInvoice";

const MonthCard = ({ visibleInvoice, onViewInvoice, onCloseInvoice }) => {
  // sample lang
  const months = [
    { month: "January", invoice: "Invoice data for January" },
    { month: "February", invoice: "Invoice data for February" },
    { month: "March", invoice: "Invoice data for March" },
  ];

  const handleViewInvoice = (index) => {
    onViewInvoice(index);
  };

  const handleCloseInvoice = () => {
    onCloseInvoice();
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto p-6 dark:bg-cover text-gray-800 dark:text-white rounded-lg mb-6 relative">
      {months.map((monthData, index) => {
        const isVisible = visibleInvoice === index; 

        return (
          <div
            key={index}
            className="mb-4 p-4 bg-white dark:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-700 shadow-lg rounded-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl font-semibold text-left">{monthData.month}</div>

              <div className="flex space-x-6">
                <button
                  onClick={isVisible ? handleCloseInvoice : () => handleViewInvoice(index)} 
                  className="flex items-center dark:text-white hover:text-blue-700 dark:hover:text-blue-700 p-2 rounded-full"
                  aria-label={isVisible ? "Close" : "View Invoice"}
                >
                  {isVisible ? (
                    <GrFormClose size={20} />
                  ) : (
                    <GrView size={20} />
                  )}
                  <span className="ml-2">{isVisible ? "Close" : "View Invoice"}</span>
                </button>
              </div>
            </div>

            {isVisible && (
              <div className="mt-4">
                <HistoricInvoice />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MonthCard;
