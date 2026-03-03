import './App.css'
import { Person } from './Person'
import { StudentList } from './StudentList'
import { NotPresentList } from './NotPresentList'
import { MixedList } from './MixedList'

function App() {

  let person = {
    'firstname': 'Rune',
    'lastname': 'Panda',
    'isPresent': true
  }

  return (
    <>
      <section className="layout">
        <StudentList>
          <Person {...person} />
          <Person firstname="Hans" lastname="Andersson" isPresent={false} />
        </StudentList>
        <NotPresentList></NotPresentList>
        <MixedList bg="darkblue"></MixedList>
      </section>
    </>
  )
}

export default App
