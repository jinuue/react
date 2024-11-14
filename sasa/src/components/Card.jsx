import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = ({ liters, maxLiters, tenant, room, bill }) => {
  const percentage = (liters / maxLiters) * 100;

  return (
    // Cards container with responsive flex layout
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 dark:bg-gray-800">
      
      {/* Meter container */}
      <div className="flex-1">
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48">
          <CircularProgressbar
            value={percentage}
            text={`${liters} L`}
            styles={buildStyles({
              textSize: '1.5rem',
              pathColor: '#3b82f6',
              textColor: '#3b82f6',
              trailColor: '#d6d6d6'
            })}
          />
        </div>
      </div>

      {/* Tenant info container */}
      <div className="flex-1 w-full md:w-auto ml-0 md:ml-2 p-3 bg-gray-200 dark:bg-gray-700 rounded-md">
        <div className="m-0">

          <div className="mb-2 rounded-md text-center">
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-blue-400 uppercase">{tenant}</p>
          </div>

          <div className="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-md">
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg">Room: {room}</p>
          </div>

          <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-md">
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg">Bill: ₱{bill}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;