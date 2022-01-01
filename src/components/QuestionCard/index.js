import React from "react";
import TextToggle from "../TextToggle";

const QuestionCard = ({
  question,
  answer,
  showQuestion,
  showAnswer,
  setShowQuestion,
  setShowAnswer,
}) => {
  return (
    <div>
      <TextToggle
        title="Question"
        label={question}
        show={showQuestion}
        setShow={setShowQuestion}
      />
      <TextToggle
        title="Answer"
        label={answer}
        show={showAnswer}
        setShow={setShowAnswer}
      />
    </div>
  );
};

export default QuestionCard;
