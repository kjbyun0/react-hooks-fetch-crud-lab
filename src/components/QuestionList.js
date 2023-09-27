import React from "react";
import QuestionItem from './QuestionItem';

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  // console.log('In QuestionList, questions: ', questions);

  const questionItems = questions.map(question => 
    <QuestionItem key={question.id} 
      question={question} 
      onDeleteQuestion={onDeleteQuestion}
      onUpdateQuestion={onUpdateQuestion} />);

  // console.log('In QuestionList, questionItems: ', questionItems);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionItems}
      </ul>
    </section>
  );
}

export default QuestionList;
