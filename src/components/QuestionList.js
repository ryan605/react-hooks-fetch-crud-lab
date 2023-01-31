import React, { useEffect, useState } from "react";

function QuestionList() {
  const [random, setRandom] = useState(null)
  console.log(random)
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(res=>res.json())
    .then(random=>{
      console.log(random)
      setRandom(random)
    })
  },[])
  if(random===null){
    return null
  }
  function handleDelete(id){
    fetch(`http://localhost:4000/questions/${id}`,{
      method:'DELETE'
    })
    .then((res)=>res.json())
    .then((deleted)=>{
      const updatedQuestions = random.filter((question) => question.id !== id);
      setRandom(updatedQuestions);
      console.log(deleted)
    })
  }
  
  const qList = random.map((question, index)=>{

   
    return (
<>

      <ul key={index}>
        <li key={index}>{question.prompt} </li> <button onClick={()=>handleDelete(question.id)}>Delete Question</button>
        </ul>
</>
    )
  })
  return (
    <section >
      <h1>Questions</h1>
     {qList}
    </section>
  );
}

export default QuestionList;