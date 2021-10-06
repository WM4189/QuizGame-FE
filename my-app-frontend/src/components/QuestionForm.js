// import React, { useEffect, useState } from "react";
import {useState} from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white"
  };



function QuestionForm(){
    const history = useHistory();
    const defaultState = {
        prompt: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correct_answer: "",
        subject_id: 1
      }
    const [formData, setFormData] = useState(defaultState);

    const index = formData.correct_answer
    const answers = [formData.answer1, formData.answer2, formData.answer3, formData.answer4]
    const stringAnswer = answers[index]


      
    let subject_index = formData.subject_id
    // parseInt((Math.floor(subject_index += formData.subject_id )))
    const subjectId = (parseInt(subject_index)+1)
    // console.log(subjectId)

      function handleChange(event) { 
        setFormData({  
          ...formData,
          [event.target.name]: event.target.value,
        });
      }


      function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:9292/question", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: formData.prompt,
            answer1: formData.answer1,
            answer2: formData.answer2,
            answer3: formData.answer3,
            answer4: formData.answer4,   
            correct_answer: stringAnswer,
            subject_id: subjectId
          }),
        });
        setFormData(defaultState)
        history.goBack()
      }
    
       
    return(
        <div>

        <NavLink
			to="/"
			exact
			style={linkStyles}
			activeStyle={{
			  background: "blue",
			}}
		  >
		  Home
		</NavLink>
        
        <section style={{display: 'flex', justifyContent: 'center'}}>
        <h1>Add New Question</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Prompt:
            <input
              type="text"
              name="prompt"
              value={formData.prompt}
              onChange={handleChange}
            />
          </label>
          <label>
            Answer 1:
            <input
              type="text"
              name="answer1"
              value={formData.answer1}
              onChange={handleChange}
            />
          </label>
          <label>
            Answer 2:
            <input
              type="text"
              name="answer2"
              value={formData.answer2}
              onChange={handleChange}
            />
          </label>
          <label>
            Answer 3:
            <input
              type="text"
              name="answer3"
              value={formData.answer3}
              onChange={handleChange}
            />
          </label>
          <label>
            Answer 4:
            <input
              type="text"
              name="answer4"
              value={formData.answer4}
              onChange={handleChange}
            />
          </label>
          <label>
            Correct Answer:
            {/* <input
              type="text"
              name="correct_answer"
              value={formData.correct_answer}
              onChange={handleChange}
              id="answer"
            /> */}
            <select
              name="correct_answer"
              value={formData.correct_answer}
              onChange={handleChange}
              id="answer"
            >
              <option value="0">{formData.answer1}</option>
              <option value="1">{formData.answer2}</option>
              <option value="2">{formData.answer3}</option>
              <option value="3">{formData.answer4}</option>
            </select>
            </label>
            <br></br>
            <label>
              Subject:
            <select
              name="subject_id"
              value={formData.subject_id}
              onChange={handleChange}
              id="subject_id"
            >
              <option value="0">JavaScript</option>
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">Python</option>
              <option value="4">SQL</option>
              <option value="5">Java</option>
              <option value="6">C++</option>
            </select>
          </label>
          <button type="submit">Add Question</button>
        </form>
      </section>
      </div>
    )
}

export default QuestionForm;