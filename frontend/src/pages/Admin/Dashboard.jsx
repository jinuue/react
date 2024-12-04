import Card from '../../components/Admin/Card';
import tenantData from '../../data/tenantData';  
import Navbar from "../../components/Admin/Navbar";
import Sidebar from "../../components/Admin/Sidebar";
import ThemeContextProvider from "../../context/ThemeContextProvider";


const Dashboard = () => {
  return (
    <ThemeContextProvider>
      <div className="flex">
        <Sidebar />
        <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
          <Navbar />
    <div className="grow p-8 text-gray-900 dark:bg-gray-900 dark:bg-cover dark:bg-center dark:text-white min-h-screen">
      <h2 className="text-2xl mb-4"></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
        {tenantData.map((tenant, index) => (
          <Card
            key={index}
            liters={tenant.liters}
            maxLiters={tenant.maxLiters}
            tenant={tenant.tenant}
            room={tenant.room}
            bill={tenant.bill}
          />
        ))}
      </div>
    </div>
    </div>
    </div>
    </ThemeContextProvider>
  );
};

export default Dashboard;
