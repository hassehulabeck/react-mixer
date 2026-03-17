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

  const [mixedStudents, setMixedStudents] = useState([])

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


  const groups = mixedStudents.reduce((acc, student) => {
    const key = student.groupId
    if (!acc[key]) acc[key] = []
    acc[key].push(student)
    return acc
  }, {})

  function togglePresent(id) {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return { ...student, isPresent: !student.isPresent }
      }
      return student
    })
    setStudents(updatedStudents);
  }

  function mixStudents() {
    // Fisher-Yates shuffle
    const shuffled = [...present]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    // If odd number, the last group gets 3 instead of 2
    const isOdd = shuffled.length % 2 !== 0
    const groups = []
    let i = 0
    let groupId = 1

    while (i < shuffled.length) {
      // If this is the last 3 students and total is odd, group them together
      const isLastThree = isOdd && i === shuffled.length - 3
      const size = isLastThree ? 3 : 2

      const group = shuffled.slice(i, i + size).map(student => ({
        ...student,
        groupId
      }))

      groups.push(...group)
      i += size
      groupId++
    }

    setMixedStudents(groups)
    setStudents(prev => prev.filter(student => !student.isPresent))
  }

  return (
    <>
      <section className="layout">
        <section className="buttons">
          <button onClick={mixStudents}>Mix!</button>
        </section>
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
          {absent?.map(student => (
            <Person key={student.id} {...student} onClickHandler={() => togglePresent(student.id)} />
          ))}
        </NotPresentList>
        <MixedList bg="hotpink" groups={groups} />
      </section>
    </>
  )
}

export default App