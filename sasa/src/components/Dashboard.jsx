import Card from './Card';
import tenantData from '../data/tenantData';  

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
