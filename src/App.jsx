import { useEffect, useState, createContext, useContext } from 'react'
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
  const [currMsg, setCurrMsg] = useState({})

  const addMessages = (id) => async (msg) => {

    try {
      const response = await fetch('/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ msg: msg })
      })
      const data = await response.json()

      setCurrMsg(currMsg => {

        const updatedCurrMsg = { ...currMsg }
        const dontKnow = updatedCurrMsg[id] ? [...updatedCurrMsg[id]] : []

        dontKnow.push({
          msg: msg,
          res: data.res
        });

        return {
          ...updatedCurrMsg, [id]: dontKnow
        }
      })
    }
    catch(error) {
      console.error(error)
    }
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
              return person.id == activeId ? (
                  <MessageBox 
                    key={index} 
                    activeId={person.id} 
                    handleMessages={addMessages(person.id)} 
                    currMsg={currMsg[Number(activeId)]} 
                    />
              ) : null
              })}
          </div>
          <div>
          </div>
        </div>   
      </div>
    </>
  )
}

export default App
