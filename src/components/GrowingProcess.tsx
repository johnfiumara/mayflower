import React, { useState } from 'react';

/**
 * The CranberryGrowingProcess component shows a slideshow of the steps involved
 * in growing cranberries, from planting to harvesting.
 */
const GrowingProcess: React.FC = () => {
  /**
   * The current step in the slideshow.
   */
  const [currentStep, setCurrentStep] = useState(0);

  /**
   * The steps in the slideshow.
   */
  const steps = [
    {
      /**
       * The title of the step.
       */
      title: "Planting",
      /**
       * A short description of the step.
       */
      description: "Cranberry vines are planted in sandy bogs or marshes. The soil is prepared with a layer of sand, peat, gravel, and clay.",
      /**
       * The URL of an image to show for the step.
       */
      image: "https://images.unsplash.com/photo-1620662736427-b8a198e52e07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
    },
    {
      title: "Growing",
      description: "Cranberry vines grow and spread across the bog floor. They require regular watering, pruning, and protection from pests and diseases.",
      image: "https://images.unsplash.com/photo-1635363638580-c2809d049ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Flowering",
      description: "In late spring and early summer, cranberry plants produce pink flowers that are pollinated by bees.",
      image: "https://images.unsplash.com/photo-1591676480441-c7d2f077d9d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Berry Development",
      description: "After pollination, small green berries begin to form. They grow and turn white, then red as they ripen throughout the summer.",
      image: "https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Harvesting",
      description: "In fall, the bogs are flooded, and ripe cranberries float to the surface. They are then collected using specialized equipment.",
      image: "https://images.unsplash.com/photo-1603033172872-c2525115c7b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-red-800">Cranberry Growing Process</h1>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="mb-6">
          <img
            src={steps[currentStep].image}
            alt={steps[currentStep].title}
            className="object-cover w-full h-64 rounded-lg"
          />
        </div>
        <h2 className="mb-4 text-2xl font-semibold text-red-700">{steps[currentStep].title}</h2>
        <p className="mb-6 text-gray-700">{steps[currentStep].description}</p>
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
            className="px-4 py-2 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
            className="px-4 py-2 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default GrowingProcess;