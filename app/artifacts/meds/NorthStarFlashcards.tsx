'use client';

import React, { useState } from 'react';
import { RefreshCw, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

const NorthStarFlashcards = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [completedCards, setCompletedCards] = useState(new Set());
  const [showStats, setShowStats] = useState(false);

  const flashcards = [
    {
      question: "What is a North Star Metric?",
      answer: "A single, focused metric that best captures the core value your product delivers to customers. It serves as the guiding compass for product strategy and aligns teams on what success looks like.",
      category: "Definition"
    },
    {
      question: "What are the three core qualities of a good North Star Metric?",
      answer: "1) It represents the value users get from your product\n2) It's within product and marketing's sphere of influence\n3) It's a leading indicator of revenue",
      category: "Characteristics"
    },
    {
      question: "What are the three 'games' products can play according to Amplitude's framework?",
      answer: "1) The Attention Game - How much time users spend in your product\n2) The Transaction Game - How many transactions users make\n3) The Productivity Game - How efficiently users can get work done",
      category: "Framework"
    },
    {
      question: "What was Facebook's early North Star Metric?",
      answer: "Number of users adding seven friends in the first ten days. This metric captured the critical action that led to long-term retention.",
      category: "Examples"
    },
    {
      question: "What is Spotify's North Star Metric?",
      answer: "Time Spent Listening. This metric tells them whether users are finding value and indicates if Spotify is becoming the go-to destination for music discovery and streaming.",
      category: "Examples"
    },
    {
      question: "What is Netflix's North Star Metric?",
      answer: "Watch Time. The longer people are watching, the more successful the company is at delivering value.",
      category: "Examples"
    },
    {
      question: "What is Slack's North Star Metric?",
      answer: "Active Daily Users. The more daily active users there are, the closer Slack is to reaching its goals of workplace collaboration.",
      category: "Examples"
    },
    {
      question: "Why are 'Registered Users' or 'Downloads' bad North Star Metrics?",
      answer: "They are vanity metrics that say nothing about what customers value about your product. They don't reflect actual user engagement or value derived from the product.",
      category: "Pitfalls"
    },
    {
      question: "What are 'inputs' in the North Star Framework?",
      answer: "A set of 3-5 influential, complementary factors that directly affect your North Star Metric and that your team can directly influence through their day-to-day work.",
      category: "Framework"
    },
    {
      question: "Why should you NOT be able to influence your North Star directly?",
      answer: "Your North Star Metric should be an outcome or output that changes as a result of improving your input metrics. If you can move it directly, it's probably not a good North Star - it should be one level out of reach.",
      category: "Best Practices"
    },
    {
      question: "What is the difference between leading and lagging indicators? Which is better for a North Star?",
      answer: "Lagging indicators tell you what already happened (like Monthly Recurring Revenue). Leading indicators predict future results. North Star Metrics should be leading indicators that help you forecast success.",
      category: "Characteristics"
    },
    {
      question: "For a grocery delivery service, what might be a good North Star Metric?",
      answer: "Total monthly items received on time. This focuses on customer value (on-time delivery) and is a strong predictor of future purchases, rather than just total items delivered or order value.",
      category: "Examples"
    },
    {
      question: "What is a 'counter metric' and why is it important?",
      answer: "A counter metric ensures that improvements to your North Star Metric didn't come at the expense of an equally important outcome. It prevents optimization that sacrifices other critical aspects of the product.",
      category: "Best Practices"
    },
    {
      question: "Why might 'Monthly Recurring Revenue' be a bad North Star Metric?",
      answer: "It's a lagging metric that tells you what happened in the past rather than predicting future results. It doesn't capture the user value that leads to that revenue.",
      category: "Pitfalls"
    },
    {
      question: "How often should you reevaluate your North Star Metric?",
      answer: "Regularly, ideally at least once a quarter. As your product evolves or if you undergo a major pivot, your North Star may need to change to reflect the most critical value signal.",
      category: "Best Practices"
    },
    {
      question: "What is a metric tree and why is it important?",
      answer: "A metric tree breaks down your North Star Metric into actionable, operational components. It connects high-level focus metrics to lower-level input metrics, creating a clear chain of causality so teams understand how their work impacts the North Star.",
      category: "Framework"
    },
    {
      question: "For a SaaS company like Dropbox, what might be a better North Star than 'total free trial accounts'?",
      answer: "Trial accounts with >3 users active in week 1. This more precise metric provides insight into the value the account is getting and signals future trial conversion and subscription revenue.",
      category: "Examples"
    },
    {
      question: "What was the main problem a PM described when tracking 20 different metrics on a dashboard?",
      answer: "They chased metrics that performed poorly each day instead of focusing on the most important thing. This led to wasted resources tackling random fluctuations rather than sustainable growth of a core metric.",
      category: "Pitfalls"
    },
    {
      question: "For a discount shopping app, what would be a good North Star Metric?",
      answer: "Total percentage discount activated per week. This captures what's most valuable to customers (the discount) and what's most likely to drive repeat usage.",
      category: "Examples"
    },
    {
      question: "What are the key benefits of having a North Star Metric?",
      answer: "Better alignment across teams, clearer prioritization of initiatives, less wasted work, provides a unifying goal, and helps assess which projects will drive growth and align with business strategy.",
      category: "Benefits"
    }
  ];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKnew = () => {
    setScore({ ...score, correct: score.correct + 1 });
    setCompletedCards(new Set([...completedCards, currentCard]));
    handleNext();
  };

  const handleDidntKnow = () => {
    setScore({ ...score, incorrect: score.incorrect + 1 });
    setCompletedCards(new Set([...completedCards, currentCard]));
    handleNext();
  };

  const handleReset = () => {
    setCurrentCard(0);
    setIsFlipped(false);
    setScore({ correct: 0, incorrect: 0 });
    setCompletedCards(new Set());
    setShowStats(false);
  };

  const progress = (completedCards.size / flashcards.length) * 100;
  const accuracy = score.correct + score.incorrect > 0 
    ? Math.round((score.correct / (score.correct + score.incorrect)) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">North Star Metrics</h1>
          <p className="text-xl text-purple-200">Master Product Management Fundamentals</p>
        </div>

        {/* Stats Bar */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center text-white mb-2">
            <div>
              <span className="text-sm opacity-75">Progress: </span>
              <span className="font-bold">{completedCards.size}/{flashcards.length}</span>
            </div>
            <div>
              <span className="text-sm opacity-75">Accuracy: </span>
              <span className="font-bold">{accuracy}%</span>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="font-bold">{score.correct}</span>
              </div>
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-400" />
                <span className="font-bold">{score.incorrect}</span>
              </div>
            </div>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Flashcard */}
        <div className="mb-6">
          <div 
            onClick={handleFlip}
            className="relative w-full h-96 cursor-pointer perspective-1000"
          >
            <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
              {/* Front of card */}
              <div className="absolute w-full h-full backface-hidden">
                <div className="bg-white rounded-2xl shadow-2xl p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                      {flashcards[currentCard].category}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      {flashcards[currentCard].question}
                    </h2>
                  </div>
                  <div className="text-center text-gray-500 text-sm">
                    Click to reveal answer
                  </div>
                </div>
              </div>

              {/* Back of card */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-2xl p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
                      {flashcards[currentCard].category}
                    </div>
                    <p className="text-xl text-white leading-relaxed whitespace-pre-line">
                      {flashcards[currentCard].answer}
                    </p>
                  </div>
                  <div className="text-center text-white/70 text-sm">
                    Click to see question
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-4 justify-center items-center mb-4">
          <button
            onClick={handlePrevious}
            className="bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {isFlipped && (
            <>
              <button
                onClick={handleDidntKnow}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
              >
                <X className="w-5 h-5" />
                Need to Review
              </button>
              <button
                onClick={handleKnew}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
              >
                <Check className="w-5 h-5" />
                Got It!
              </button>
            </>
          )}

          <button
            onClick={handleNext}
            className="bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Reset Button */}
        <div className="flex justify-center">
          <button
            onClick={handleReset}
            className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all flex items-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Reset Progress
          </button>
        </div>

        {/* Card counter */}
        <div className="text-center mt-6 text-white/70">
          Card {currentCard + 1} of {flashcards.length}
        </div>
      </div>
    </div>
  );
};

export default NorthStarFlashcards;