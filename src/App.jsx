import React from 'react'
import StudentsTable from './student/StudentsTable'
function App() {
  // console.log(students);
  return (
    <div className='border border-2 border-secondary m-4 p-4 '>
      <h1>Students Table</h1>
      <StudentsTable></StudentsTable>
    </div>
  )
}       
export default App
