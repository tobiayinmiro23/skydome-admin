import React from 'react'
import './MessageUser.css'
const MessageUser = () => {
  return (
    <div className='MessageUser'>
        <div className="inputContainer">
            <form action="">
                <div className="fromWrapper">
                    <h3 htmlFor="from">From</h3>
                    <input name='from' required type="text"  />
                </div>
                <div className="toWrapper">
                    <h3 htmlFor="to">To</h3>
                    <input name='to' required type="text"  />
                </div>
                <textarea required placeholder='Message'></textarea>
                <div className="btnContainer"><button>Send message</button></div>
            </form>
        </div>

    </div>
  )
}

export default MessageUser