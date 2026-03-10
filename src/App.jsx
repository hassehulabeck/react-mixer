import './App.css'
import { Person } from './Person'
import { StudentList } from './StudentList'
import { NotPresentList } from './NotPresentList'
import { MixedList } from './MixedList'
import { useEffect, useState } from 'react'

function App() {

  // Our data
  const [students, setStudents] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // derived state = filter/calculate which of the students fit in either group.
  const present = students?.filter(student => student.isPresent)
  const absent = students?.filter(student => !student.isPresent)

  const fetchData = () => {
    fetch('./src/data/students.json')
      .then ((response) => response.json())
      .then ((json) => {
        setStudents(json.students)
      })
      .catch(error => {
        console.error("Failure")
        setError("Could not load students data.")
      })
      .finally(() => {
        setLoading(false)
      })
  }
  // Fetch data on component load
  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [])


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
          {loading && <p>Loading...</p>}
          {!loading && error && <p>{error}</p>}
          {!loading && !error && 
            present?.map(student => (
              <Person key={student.id} {...student} onClickHandler={() => togglePresent(student.id)} />
            ))
          }
        </StudentList>
        <NotPresentList>
                    {
            absent?.map(student => (
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
