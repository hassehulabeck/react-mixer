import { useEffect, useState } from 'react'
import './App.css'
import { Person } from './Person'
import { StudentList } from './StudentList'
import { NotPresentList } from './NotPresentList'
import { MixedList } from './MixedList'
import { useStudents } from './hooks/useStudents'

function App() {

  const { present, absent, loading, error, groups, togglePresent, mixStudents } = useStudents()

  return (
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
  )
}

export default App