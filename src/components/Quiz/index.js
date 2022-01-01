import React, { useState } from "react";
import QuestionCard from "../QuestionCard";

const theQuiz = [
  {
    question: "what is name of the 25th James Bond film?",
    answer: "No time to die",
    showQuestion: true,
    showAnswer: false,
  },
  {
    question: "who created javascript?",
    answer: "Netscape",
    showQuestion: true,
    showAnswer: false,
  },
];
const Quiz = () => {
  const [quiz, setQuiz] = useState(theQuiz);
  const totalQuestions = theQuiz.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(quiz[0]);

  const updateCurrentIndex = () => {
    if (currentIndex + 1 < totalQuestions) {
      setSelectedQuestion(quiz[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const setShowQuestion = (showQuestion) => {
    setSelectedQuestion({
      ...selectedQuestion,
      showQuestion,
    });
  };

  const setShowAnswer = (showAnswer) => {
    setSelectedQuestion({
      ...selectedQuestion,
      showAnswer,
    });
  };

  return (
    <div style={{ width: "300px" }}>
      <div>
        {currentIndex + 1} of {totalQuestions}
        <button onClick={updateCurrentIndex} style={{ float: "right" }}>
          Next
        </button>
      </div>
      <QuestionCard
        question={selectedQuestion.question}
        answer={selectedQuestion.answer}
        showQuestion={selectedQuestion.showQuestion}
        showAnswer={selectedQuestion.showAnswer}
        setShowQuestion={setShowQuestion}
        setShowAnswer={setShowAnswer}
      />
    </div>
  );
};

export default Quiz;
