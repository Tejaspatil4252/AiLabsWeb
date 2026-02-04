const AIFeatures = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">AI Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Automated Decision Making</h3>
          <p className="text-gray-600">AI systems that can analyze complex data and make informed decisions.</p>
        </div>
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Predictive Analytics</h3>
          <p className="text-gray-600">Forecast future trends and outcomes based on historical data.</p>
        </div>
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Natural Language Understanding</h3>
          <p className="text-gray-600">Comprehend and respond to human language with high accuracy.</p>
        </div>
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Image Recognition</h3>
          <p className="text-gray-600">Identify and analyze objects, people, and scenes in images.</p>
        </div>
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Speech Recognition</h3>
          <p className="text-gray-600">Convert spoken language into written text with high accuracy.</p>
        </div>
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Anomaly Detection</h3>
          <p className="text-gray-600">Identify unusual patterns that may indicate problems or opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default AIFeatures;