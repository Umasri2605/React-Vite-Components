import React from 'react'
import students from "../assets/students.json"

function StudentsTable() {
 //state  
  var [allstudents,SetAllStudents]=React.useState([...students])
 //ui
  return (
    <div>
      <table border="2">
        <thead>
          <tr >
            <th>Icon</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Gender</th>
            <th>FatherName</th>
            <th>MotherName</th>
          </tr>
        </thead>
        <tbody>
        {
             allstudents.map((student)=>{
              return (
                <tr style={student.gender==="Female"?{backgroundColor:"lightpink"}:{backgroundColor:"lightblue"}}>
                  {
                    student.gender==="Female" && (<td><img style={{width:"50px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWN6aL8G64aaWLOmyBjk0MrR0GD4JVaHe7eg&s" alt=""/></td>)
                  }
                  {
                    student.gender==="Male" && (<td><img style={{width:"50px"}} src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg" alt=""/></td>)
                  }
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
                  <td>{student.fatherName}</td>
                  <td>{student.motherName}</td>
                </tr>
              )
             })
          }
       </tbody>
     </table>
    </div>
  )
}       
   
export default StudentsTable
