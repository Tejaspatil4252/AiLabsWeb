const Principles = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Principles</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600">
              <span className="font-bold">1</span>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Innovation</h3>
            <p className="mt-1 text-gray-600">We constantly push the boundaries of what's possible with AI technology.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600">
              <span className="font-bold">2</span>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Ethics</h3>
            <p className="mt-1 text-gray-600">We develop AI solutions that are fair, transparent, and respect privacy.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600">
              <span className="font-bold">3</span>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Collaboration</h3>
            <p className="mt-1 text-gray-600">We work closely with clients to understand their needs and deliver tailored solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principles;