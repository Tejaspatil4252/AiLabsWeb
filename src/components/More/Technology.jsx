const Technology = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Technology</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Deep Learning Frameworks</h3>
          <p className="text-gray-600">We leverage cutting-edge deep learning frameworks including TensorFlow, PyTorch, and custom neural architectures to build powerful AI models.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Natural Language Processing</h3>
          <p className="text-gray-600">Our NLP technology includes advanced language models, sentiment analysis, entity recognition, and multilingual capabilities.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Computer Vision</h3>
          <p className="text-gray-600">We develop state-of-the-art computer vision solutions for image recognition, object detection, and video analysis.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Reinforcement Learning</h3>
          <p className="text-gray-600">Our reinforcement learning algorithms enable intelligent decision-making in complex environments.</p>
        </div>
      </div>
    </div>
  );
};

export default Technology;