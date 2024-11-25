import { LiaToggleOnSolid, LiaToggleOffSolid } from "react-icons/lia"
import { useState } from "react"

const Valvecard = ({ tenant, room }) => {
  const [isToggled, setIsToggled] = useState(true);  
  const handleToggleClick = () => {
    setIsToggled(!isToggled)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 dark:bg-gray-800 relative">
      <div className="flex-1 w-full md:w-auto ml-0 md:ml-2 p-3 rounded-md">
        <div className="m-0">
          <div className="mb-2 rounded-md text-left">
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-blue-400 uppercase">
              {tenant}
            </p>
            <div className="mb-2 rounded-md text-left">
            <p className="text-xs dark:text-white text-black uppercase">
            Unit: {room}
            </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <div onClick={handleToggleClick} className="cursor-pointer">
          {isToggled ? (
            <LiaToggleOnSolid className="text-4xl text-blue-500 hover:text-blue-700" />
        ) : (
            <LiaToggleOffSolid className="text-4xl text-gray-500 hover:text-gray-700" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Valvecard
