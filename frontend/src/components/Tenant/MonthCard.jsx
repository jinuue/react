import { GrView, GrFormClose } from "react-icons/gr";
import { useState } from "react";
import InvoiceContent from "./InvoiceContent";

const MonthCard = ({ month, onCloseInvoice }) => {
  const [showInvoice, setShowInvoice] = useState(false);

  const handleViewInvoice = () => {
    setShowInvoice(true);
  };

  const handleCloseInvoice = () => {
    setShowInvoice(false);
    onCloseInvoice();
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto p-6 dark:bg-gray-800 dark:bg-cover text-gray-800 dark:text-white shadow-lg rounded-lg mb-6 relative">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold text-left">{month}</div>

        <div className="flex space-x-6">
          <button
            onClick={showInvoice ? handleCloseInvoice : handleViewInvoice} 
            className="flex items-center text-white hover:text-blue-700 p-2 rounded-full transition duration-300"
            aria-label={showInvoice ? "Close" : "View Invoice"}
          >
            {showInvoice ? (
              <GrFormClose size={20} /> 
            ) : (
              <GrView size={20} /> 
            )}
            <span className="ml-2">{showInvoice ? "Close" : "View Invoice"}</span>
          </button>
        </div>
      </div>

      {showInvoice && (
        <div className="mt-4">
          <InvoiceContent />
        </div>
      )}
    </div>
  );
};

export default MonthCard;
