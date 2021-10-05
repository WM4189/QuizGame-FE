import logo from './logo.svg';
import './App.css';


function App() {

  const getSubjects = () => {
    fetch('http://localhost:9292/subjects')
    .then(r => r.json())
    .then(subject => console.log(subject))
  }

  const getSubject = (id) => {
    fetch(`http://localhost:9292/subject/${id}`)
    .then(resp => resp.json())
    .then(data => console.log(data))
  }


  const updateQuestion = (formData, id) => {
    const {prompt, answer1, answer2, answer3, answer4, correct_answer, subject_id} = formData

  const question = {
    prompt, 
    answer1, 
    answer2,
    answer3,
    answer4,
    correct_answer,
    subject_id
  }
  const configObj = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(question)
  }
  fetch(`http://localhost:9292/question/${id}`, configObj)
  .then(r => r.json())
  .then(data => console.log(data))
  }

  const deleteQuestion = (id) => {
    fetch(`http://localhost:9292/question/${id}`, {
      method: 'DELETE'
    })
  }
  // debugger;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 
  );
}

export default App;
