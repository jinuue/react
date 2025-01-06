import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useState } from 'react';


const Card = () => {
  const [liters] = useState("╥﹏╥");
  const [maxLiters] = useState(100);
  
  const percentage = (liters / maxLiters) * 100;

  return (
    <div className="bg-white p-4 shadow-lg rounded-md flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 dark:bg-gray-800 dark:border dark:border-gray-700">
      
      {/* Meter container */}
      <div className="flex-2">
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48">
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

      <div className="flex-auto w-full md:w-auto ml-0 md:ml-2 p-3 rounded-md">
        <div className="m-0">

          <div className="flex justify-between items-center mb-2 rounded-md">
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-blue-400 uppercase">Tenant</p>
            <p className="text-gray-400 font-medium text-xs sm:text-sm lg:text-sm xl:text-base uppercase">Unit: #</p>
          </div>

          <div className="mb-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-md dark:border dark:border-gray-700">
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg">Bill: ₱</p>
          </div>

          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md dark:border dark:border-gray-700">
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg">Payment Due: </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
