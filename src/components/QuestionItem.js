

import React from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;
console.log(question)
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  fetch('http://localhost:4000/questions',{
    method:'PATCH',
    headers:{
      'Content-Type': 'application/json',
    }
  })
  .then((res)=>res.json())
  .then((patch)=>{
    console.log(patch)
  })

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button>Delete Question</button>
    </li>
  );
}

export default QuestionItem;