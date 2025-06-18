import { useEffect, useState } from 'react'
import Person from './components/Person'
import './styles/app.css'
import MessageBox from './components/MessageBox'

const initial_people = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
]

function App() {

  const [initialPeople, setInitialPeople] = useState(initial_people)
  const [activeId, setActiveId] = useState(1)

  const [messages, setMessages] = useState({})

  const addMessages = (id) => (msg) => {
    setMessages(messages => (
      {...messages, [id]: msg}
    ))
  }

  return (
    <>
      <div className="ctn flex">
        <div className="ctn_add flex">
          <div className="content">
            <ul className="persons flex">
              {initialPeople.map((person, index) => (
                <li key={index} style={{ display: 'flex', border: '1px solid black' }}>
                  <Person 
                    id={person.id} 
                    onClick={() => setActiveId(person.id)} 
                    setActiveId={setActiveId} 
                    activeId={activeId}
                     />
                </li>
              ))}
            </ul>
             <div>
             </div>
          </div>
          <div className="message_area">
            {initialPeople.map((person, index) => {
              return person.id == activeId ? 
              <MessageBox 
                key={index} 
                handleMessages={addMessages(person.id)} 
                 /> : null
              })}
          </div>
        </div>
        {console.log(messages)}     
      </div>
    </>
  )
}

export default App
