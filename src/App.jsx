import './App.css'
import { Person } from './Person'
import { StudentList } from './StudentList'
import { NotPresentList } from './NotPresentList'
import { MixedList } from './MixedList'
import { useState } from 'react'

function App() {

  // Our data
  const [students, setStudents] = useState([
    { id: 1, firstname: "Rune", lastname: "Panda", isPresent: true, groupId: null },
    { id: 2, firstname: "Volmar", lastname: "Yxkull", isPresent: false, groupId: null },
  ])

  // derived state = filter/calculate which of the students fit in either group.
  const present = students.filter(student => student.isPresent)
  const absent = students.filter(student => !student.isPresent)

  // A function to handle the toggle of present/absent (not present)
  function togglePresent(id) {
    console.log(id)
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        // In the object below, first place the object, then the properties that you will change
        return { ...student, isPresent: !student.isPresent }
      }
      // If no id-match, just return the student to updatedStudents.
      return student
    })
    setStudents(updatedStudents);
  } 


  return (
    <>
      <section className="layout">
        <StudentList>
          {
            present.map(student => (
              <Person key={student.id} {...student} onClickHandler={() => togglePresent(student.id)} />
            ))
          }
        </StudentList>
        <NotPresentList>
                    {
            absent.map(student => (
              <Person key={student.id} {...student} onClickHandler={() => togglePresent(student.id)} />
            ))
          }

        </NotPresentList>
        <MixedList bg="hotpink"></MixedList>
      </section>
    </>
  )
}

export default App
