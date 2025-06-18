import '../styles/messagebox.css'
import { useState, useEffect } from 'react'

function MessageBox({ handleMessages, getInput }) {

  const [msg, setMsg] = useState('')
  const [msgArr, setMsgArr] = useState([])

  useEffect(() => {
    handleMessages(msgArr)
  }, [msgArr])

  function handleInput(val) {
      setMsgArr(msgArr => [...msgArr, val])
      setMsg('')
  }

	return (
		    <div className="area flex">
              <div class="message_box flex">
                <div className="divMsg flex">
                </div>
              </div>
              <div class="message_input flex">
                <div class="btn-anchor">
                  <textarea onChange={(e) => setMsg(e.target.value)} name="" id="" value={msg} placeholder="Message Person #1"></textarea>
                  <button onClick={() => handleInput(msg)}>&gt;</button>
                </div>
              </div>
            </div>
		)
}

export default MessageBox