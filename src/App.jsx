import { useEffect, useState } from 'react'
import './App.css'
import { Person } from './Person'
import { StudentList } from './StudentList'
import { NotPresentList } from './NotPresentList'
import { MixedList } from './MixedList'
import { useStudents } from './hooks/useStudents'
import { InputForm } from './InputForm'


function App() {

  const { 
    present, 
    absent, 
    loading, 
    error, 
    groups, 
    togglePresent, 
    mixStudents, 
    toggleDarkMode 
  } = useStudents()

  return (
    <section className="layout">
      <section className="buttons">
        <button onClick={mixStudents}>Mix!</button>
        <button onClick={toggleDarkMode}>Dark/Light mode</button>
        <InputForm onAdd={}/>
      </section>
      <StudentList>
        {loading && "loading..."}
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