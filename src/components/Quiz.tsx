import React, { useState } from 'react';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "What color are ripe cranberries?",
      options: ["Green", "White", "Red", "Blue"],
      correctAnswer: 2
    },
    {
      question: "In which season are cranberries typically harvested?",
      options: ["Spring", "Summer", "Fall", "Winter"],
      correctAnswer: 2
    },
    {
      question: "What is the nickname for cranberries due to their behavior when ripe?",
      options: ["Jumpberries", "Bounceberries", "Floatberries", "Rollberries"],
      correctAnswer: 1
    },
    {
      question: "Which state is the largest producer of cranberries in the United States?",
      options: ["Massachusetts", "New Jersey", "Oregon", "Wisconsin"],
      correctAnswer: 3
    },
    {
      question: "What percentage of cranberries are sold fresh?",
      options: ["About 5%", "About 25%", "About 50%", "About 75%"],
      correctAnswer: 0
    }
  ];

  const handleAnswerClick = (selectedAnswer: number) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-red-800 mb-6">Cranberry Quiz</h1>
      {showScore ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Quiz Complete!</h2>
          <p className="text-xl mb-6">You scored {score} out of {questions.length}</p>
          <button
            onClick={restartQuiz}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p className="text-lg mb-6">{questions[currentQuestion].question}</p>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className="w-full text-left bg-red-100 p-3 rounded-lg hover:bg-red-200 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;