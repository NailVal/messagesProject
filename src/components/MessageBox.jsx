import '../styles/messagebox.css'
import { useState, useEffect, useContext } from 'react'

function MessageBox({ handleMessages, messages, currMsg }) {

  const [msg, setMsg] = useState('')
  console.log(currMsg[0])

	return (
		    <div className="area flex">
              <div class="message_box flex">
                <div className="divMsg flex">
                  {messages && messages.msgArr ? messages.msgArr.map((message, index) => (
                    <div className="divMsgContent" key={index}>
                      <p>{message}</p>
                    </div>    
                  )) : ''}
                  {messages && messages.resArr ? messages.resArr.map((res, index) => (
                    <div className="divMsgContent left_msg" key={index}>
                      <p>{res}</p>
                    </div> 
                  )) : ''}              
              </div>
              </div>
              <div class="message_input flex">
                <div class="btn-anchor">
                  <textarea onChange={(e) => setMsg(e.target.value)} name="" id="" value={msg} placeholder="Message Person #1"></textarea>
                  <button onClick={() => {
                    setMsg('')
                    handleMessages(msg)
                    }}>&gt;</button>
                </div>
              </div>
            </div>
		)
}

export default MessageBox