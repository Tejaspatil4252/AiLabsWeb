const Products = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">AI Analytics Platform</h3>
          <p className="text-gray-600">Advanced data analytics solution powered by machine learning algorithms.</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Natural Language Processor</h3>
          <p className="text-gray-600">State-of-the-art NLP solution for text analysis and understanding.</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Computer Vision Suite</h3>
          <p className="text-gray-600">Comprehensive image and video analysis tools for various industries.</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Predictive Modeling Tool</h3>
          <p className="text-gray-600">Advanced forecasting solution for business intelligence.</p>
        </div>
      </div>
    </div>
  );
};

export default Products;