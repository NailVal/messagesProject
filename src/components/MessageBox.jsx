import '../styles/messagebox.css'
import { useState, useEffect, useContext } from 'react'

function MessageBox({ handleMessages, currMsg }) {

  const [msg, setMsg] = useState('')
  console.log(currMsg)

  function handleButton() {
    if (msg.length !== 0) {
      handleMessages(msg)
    }
  }

	return (
		    <div className="area flex">
              <div class="message_box flex">
                <div className="divMsg flex">
                  {currMsg ? currMsg.map((obj, index) => (
                    <div className="divMsgContent" key={index}>
                      <p>{obj.msg}</p>
                      <p className="left">{obj.res}</p>
                    </div>    
                  )) : ''}              
              </div>
              </div>
              <div class="message_input flex">
                <div class="btn-anchor">
                  <textarea onChange={(e) => setMsg(e.target.value)} name="" id="" value={msg} placeholder="Message Person #1"></textarea>
                  <button onClick={() => {
                    setMsg('')
                    handleButton()
                    }}>&gt;</button>
                </div>
              </div>
            </div>
		)
}

export default MessageBox