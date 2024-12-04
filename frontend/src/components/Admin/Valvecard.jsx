import { LiaToggleOnSolid, LiaToggleOffSolid } from "react-icons/lia";
import { useState } from "react";

const Valvecard = ({ tenant, room }) => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between dark:bg-gray-800 dark:border dark:border-gray-700 overflow-hidden">
      {/* Tenant Name */}
      <div className="text-left flex-1">
        <p className="text-base font-semibold text-blue-500 uppercase dark:text-blue-400">
          {tenant}
        </p>
      </div>

      {/* Unit and Toggle Button */}
      <div className="flex items-center space-x-0">
        <p className="text-xs dark:text-white text-gray-500">
          Unit: {room}
        </p>

        {/* Toggle Button */}
        <div
          onClick={handleToggleClick}
          className="flex items-center justify-center p-2 dark:border-gray-500 rounded-md cursor-pointer"
        >
          {isToggled ? (
            <LiaToggleOnSolid className="text-3xl text-blue-500 dark:text-blue-400" />
          ) : (
            <LiaToggleOffSolid className="text-3xl text-gray-500 dark:text-gray-400" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Valvecard;
