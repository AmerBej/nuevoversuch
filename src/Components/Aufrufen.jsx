import React from 'react'
import { useState } from 'react'
import { getDatabase, ref, onValue } from 'firebase/database'

const Aufrufen = () => {
  const[inputId,setId]=useState()
  const[accessedText,setText]=useState("placeholder")
  
  const json_list=[
    {
      id:123,
      text:"hello"
    },
    {
      id:456,
      text:"olleh"
    }
  ]
  const db = getDatabase()
  const textRef = ref(db,"notes/" + inputId + "/text");
  const inputActivate =()=>{

  onValue(textRef, (snapshot) => {
    const data = snapshot.val();
    setText(data)
  }
  )
  }




  return (
    <div>
      
      <div className="aufrufen__tab">
      <div className="key__enter">
        <h2>Daten aufrufen</h2>
        <input type="text" className='key__input' placeholder='enter key to see data...' onChange={(e)=>{setId(e.target.value)}} />
        <button className='key__button'onClick={()=>{inputActivate()}}>enter</button>
      </div>
      placeholder for loaded content after key enter
      </div>
      {accessedText}
    </div>
  )
}

export default Aufrufen