import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useState } from 'react';

const Card = () => {
  const [liters] = useState("╥﹏╥");
  const [maxLiters] = useState(100);
  
  const percentage = (liters / maxLiters) * 100;

  return (
    <div className="bg-white p-4 shadow-lg rounded-md flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 dark:bg-gray-800 dark:border dark:border-gray-700">
      
      {/* Meter container */}
      <div className="flex-1 mb-4 sm:mb-0">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-56 lg:h-56">
          <CircularProgressbar
            value={percentage}
            text={`${liters} L`}
            styles={buildStyles({
              textSize: '1rem',
              pathColor: '#3b82f6',
              textColor: '#3b82f6',
              trailColor: '#d6d6d6',
            })}
          />
        </div>
      </div>

      <div className="flex-auto w-full sm:w-auto ml-0 sm:ml-4 p-3 rounded-md">
        <div className="m-0">

          {/* Text & Unit Info */}
          <div className="flex justify-between items-center mb-3 rounded-md">
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-blue-400 uppercase">Tenant</p>
            <p className="text-gray-400 font-medium text-xs sm:text-sm lg:text-sm xl:text-base uppercase">Unit: #</p>
          </div>

          {/* Bill Info */}
          <div className="mb-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-md dark:border dark:border-gray-700">
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg">Bill: ₱</p>
          </div>

          {/* Payment Due */}
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md dark:border dark:border-gray-700">
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg">Payment Due: </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
