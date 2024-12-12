import Navbar from '../../components/Admin/Navbar';
import Sidebar from '../../components/Admin/Sidebar';
import Valvecard from '../../components/Admin/Valvecard';
import tenantData from "../../data/tenantData";
import ThemeContextProvider from '../../context/ThemeContextProvider';
import { useState } from 'react';  

function Valve() {
  const [valveStatus, setValveStatus] = useState(
    tenantData.reduce((acc, tenant) => {
      acc[tenant.tenant] = false;  
      return acc;
    }, {})
  );

  const toggleValve = (tenantName) => {
    setValveStatus((prevStatus) => ({
      ...prevStatus,
      [tenantName]: !prevStatus[tenantName],
    }));
  };

  return (
    <ThemeContextProvider>
      <div className="flex">
        <Sidebar />

        <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
          <Navbar />

          <div className="p-8 text-gray-900 dark:bg-gray-900 dark:bg-cover dark:bg-center dark:text-white min-h-screen">
            <h2 className="text-lg font-medium mb-6 text-center md:text-left">Turn Valve Off/On for Tenant</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
              {tenantData.map((tenant, index) => (
                <Valvecard
                  key={index}
                  tenant={tenant.tenant}
                  room={tenant.room}
                  isValveOn={valveStatus[tenant.tenant]} 
                  toggleValve={() => toggleValve(tenant.tenant)}  
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default Valve;
