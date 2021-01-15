import React from 'react'

function formatInfo(student){
  return student.name + "[" + student.id + "]"
}

const student = {
  id: "2017707079",
  name: "조준기"
}

const element = (
    <h2>
      {formatInfo(student)}
    </h2>
)

function App() {

  return element

}

export default App;
