

const Home = () => (
  <div className="text-center">
    <h1 className="mb-6 text-4xl font-bold text-red-800">Welcome to  Mayflower Cranberry Farm</h1>
    <img
      src="#"
      alt="Cranberry Bog"
      className="w-full max-w-4xl mx-auto mb-8 rounded-lg shadow-lg"
    />
    <p className="mb-8 text-xl text-gray-700">
      Discover the fascinating world of cranberries at our family-owned farm. 
      Learn about their growth, health benefits, and the rich history behind 
      these tart berries.
    </p>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-red-700">Our History</h2>
        <p>Established in 1890, Mayflower Cranberry  has been a family tradition for generations.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-red-700">Sustainable Farming</h2>
        <p>We use eco-friendly practices to ensure the health of our bogs and surrounding ecosystems.</p>
      </div>
     {/*  <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-red-700">Visit Us</h2>
        <p>Join our guided tours and experience the beauty of cranberry harvesting firsthand.</p>
      </div> */}
    </div>
  </div>
);


export default Home;