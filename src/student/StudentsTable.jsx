import React from 'react'
import students from "../assets/students.json"

function StudentsTable() {
 //state  
  var [allstudents,SetAllStudents]=React.useState([...students])
  var[startindex,SetStartIndex]=React.useState(0);
  var[endindex,SetEndIndex]=React.useState(startindex+5);
  function sortByKey(key){
    // var temp=[...allstudents];
    // temp.sort((a,b)=>{
    //    if(a[k]>b[k]){
    //     return 1
    //    }
    //    else{return -1}
    // })
    // SetAllStudents([...temp])
    SetAllStudents((currentStudents)=>{
       currentStudents.sort((a,b)=>{
        if(a[key]>b[key]){
            return 1
        }
        else{return -1}
      })
       return [...currentStudents]
    })
  }
  function Next5(){
   SetStartIndex(startindex+5);
   SetEndIndex(endindex+5)
  }
 //ui
  return (
    <div>
         <button onClick={()=>{Next5()}}>Next 5 Students</button>
        <table border="1" className='table table-striped'>
        <thead>
          <tr >
            <th>Icons</th>
            <th onClick={()=>{sortByKey('firstName')}}>FirstName</th>
            <th onClick={()=>{sortByKey('lasstName')}}>LastName</th>
            <th onClick={()=>{sortByKey('age')}}>Age</th>
            <th onClick={()=>{sortByKey('gender')}}>Gender</th>
            <th onClick={()=>{sortByKey('fatherName')}}>FatherName</th>
            <th onClick={()=>{sortByKey('motherName')}}>MotherName</th>
          </tr>
        </thead>
        <tbody>
        {
             allstudents.slice(startindex,endindex).map((student)=>{
              return (
                <tr style={student.gender==="Female" ?{backgroundColor:"lightpink"}:{backgroundColor:'lightblue'}}>
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
       <tfoot>
        <tr>
            <th>These are thse Students Here</th>
        </tr>
       </tfoot>
     </table>
    </div>
  )
}       
   
export default StudentsTable
