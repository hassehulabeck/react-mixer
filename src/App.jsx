import './App.css'
import { Person } from './Person'
import { StudentList } from './StudentList'
import { NotPresentList } from './NotPresentList'
import { MixedList } from './MixedList'
import { BadCounter } from './BadCounter'

function App() {

  let person = {
    'firstname': 'Rune',
    'lastname': 'Panda',
    'isPresent': true
  }

  return (
    <>
      <BadCounter></BadCounter>
      <section className="layout">
        <StudentList>
          <Person {...person} />
          <Person firstname="Hans" lastname="Andersson" isPresent={false} />
        </StudentList>
        <NotPresentList></NotPresentList>
        <MixedList bg="hotpink"></MixedList>
      </section>
    </>
  )
}

export default App
