import Navbar from '../../components/Admin/Navbar';
import Sidebar from '../../components/Admin/Sidebar';
import Valvecard from '../../components/Admin/Valvecard';
import tenantData from "../../data/tenantData";
import ThemeContextProvider from '../../context/ThemeContextProvider';
import { useState } from 'react';  // Import useState to manage valve state

function Valve() {
  // State to track valve status for tenants
  const [valveStatus, setValveStatus] = useState(
    tenantData.reduce((acc, tenant) => {
      acc[tenant.tenant] = false;  // Default to off for all tenants
      return acc;
    }, {})
  );

  // Toggle valve status
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

          {/* Main content area */}
          <div className="p-8 text-gray-900 dark:bg-gray-900 dark:bg-cover dark:bg-center dark:text-white min-h-screen">
            {/* Title Section */}
            <h2 className="text-lg font-medium mb-6 text-center md:text-left">Turn Valve Off/On for Tenant</h2>

            {/* Grid for cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
              {tenantData.map((tenant, index) => (
                <Valvecard
                  key={index}
                  tenant={tenant.tenant}
                  room={tenant.room}
                  isValveOn={valveStatus[tenant.tenant]}  // Pass current valve status
                  toggleValve={() => toggleValve(tenant.tenant)}  // Toggle valve on click
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
