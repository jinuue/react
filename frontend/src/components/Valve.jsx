import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Valvecard from './Valvecard';
import tenantData from "../data/tenantData";
import ThemeContextProvider from '../context/ThemeContextProvider';

function Valve() {
  return (
    <ThemeContextProvider>
      <div className="flex">
        <Sidebar />
        <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
          <Navbar/>
          <div className="p-8 text-gray-900 dark:bg-gray-900 dark:bg-cover dark:bg-center dark:text-white min-h-screen">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
              {tenantData.map((tenant, index) => (
                <Valvecard
                  key={index}
                  tenant={tenant.tenant}
                  room = {tenant.room}
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
