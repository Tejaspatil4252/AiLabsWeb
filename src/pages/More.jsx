
import { Outlet } from 'react-router-dom';

const More = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">More Information</h1>
      <Outlet />
    </div>
  );
};

export default More;