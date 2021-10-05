import React from 'react';

function Subject(){

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


    return (
        <div>
            HELLO
        </div>
    )
}

export default Subject;