import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function handleDeleteQuestion(deletedQuestion) {
    // console.log('In handleDeleteQuestion, deletedQuestion: ', deletedQuestion);
    setQuestions(questions.filter(question => question.id !== deletedQuestion.id));
  }

  function handleUpdateQuestion(updatedQuestion) {
    console.log('In handleUpdateQuestion, updatedQuestion: ', updatedQuestion);
    const updatedQuestions = questions.map(question => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      }
      return question;
    });
    setQuestions(updatedQuestions);
  }


  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(resp => resp.json())
    .then(data => setQuestions(data));
  }, []);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm onAddQuestion={handleAddQuestion} /> : 
        <QuestionList questions={questions} 
          onDeleteQuestion={handleDeleteQuestion}
          onUpdateQuestion={handleUpdateQuestion} />}
    </main>
  );
}

export default App;
