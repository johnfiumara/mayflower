import React from "react";

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-red-800">
        About Mayflower Cranberry Farm
      </h1>
      <img
        src="https://images.unsplash.com/photo-1508747703725-719777637510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Cranberry Farm"
        className="w-full mb-8 rounded-lg shadow-lg"
      />
      <p className="mb-6 text-lg text-gray-700">
        From 1890 to 1910 the bogs of the Randall Bros. down at the end of
        Mayflower Road were the Mecca for local pickers. The berries were all
        picked by hand and from one to two hundred pickers were kept busy on
        these small bogs. It usually required from six to eight weeks to
        complete the task. Pickers came in from Carver and Halifax to aid the
        local folks in the harvest. Year after year several more came from the
        distant cities of Fall River and New Bedford.
      </p>
      <p className="mb-6 text-lg text-gray-700">
        Today, Mayflower Cranberries has 112 total acres of which 23.6 acres are
        cranberry bogs, the balance being the reservoir, wetlands and upland
        buffer areas that support the bogs .We are growers for Ocean Spray
        Cranberries. Ocean Spray is a farmer owned cooperative.
      </p>
      <h2 className="mb-4 text-2xl font-semibold text-red-700">
        </h2>
      <ul className="mb-6 text-gray-700 list-disc list-inside">
        <li>Sustainable farming practices</li>
        <li>Preservation of wetland habitats</li>
        <li>Community education and engagement</li>
        <li>Supporting local wildlife</li>
      </ul>
      <p className="text-lg text-gray-700">
        We invite you to explore our website, learn about cranberries!
      </p>
    </div>
  );
};

export default About;
