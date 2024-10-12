import React from 'react';

/*************  ✨ Codeium Command 🌟  *************/
/**
 * A list of interesting facts about cranberries.
 */
const CranberryFacts: React.FC = () => {
  /**
   * An array of cranberry facts.
   */
  const facts = [
    "Cranberries are one of only three fruits native to North America.",
    "They don't actually grow in water, but on vines in sandy bogs and marshes.",
    "Cranberries bounce when they're ripe, which is why they're also known as 'bounceberries'.",
    "The cranberry is Massachusetts' official state fruit.",
    "Cranberries are packed with antioxidants and have numerous health benefits.",
    "Native Americans used cranberries for food, medicine, and dye long before European settlers arrived.",
    "The modern name 'cranberry' derives from 'craneberry', named by early European settlers because the flower resembles the head of a Sandhill crane.",
    "Cranberries can be stored in a freezer for up to a year.",
    "Wisconsin is the largest producer of cranberries in the United States.",
    "Only about 5% of cranberries are sold fresh, while the rest are turned into juice, sauce, and other products."
  ];

  /**
   * Map over the facts and render a list item for each one.
   */
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-red-800">Cranberry Facts</h1>
      <img
        src="https://images.unsplash.com/photo-1605548109944-9040d0972bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Cranberries"
        className="w-full mb-8 rounded-lg shadow-lg"
      />
      <ul className="space-y-4">
        {facts.map((fact, index) => (
          <li key={index} className="p-4 bg-white rounded-lg shadow-md">
            <span className="font-semibold text-red-700">Fact {index + 1}:</span> {fact}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default CranberryFacts;