import { getDatabase, ref, set } from 'firebase/database'
import React from 'react'
import {useState} from "react"

const Speichern = () => {
  const[textareaValue, changeTextareaValue]=useState("")
  const[inputValue, changeInputValue]=useState("")
  
  //all of this between these 2 comments is for testing purposes 1/2
  const a={text:textareaValue,id:inputValue}


  const listOfObjects=[
    
  ]
  const addToList = (item) =>{
    listOfObjects.push(item)
    console.log(listOfObjects)
  }
  //all of this is for testing purposes 2/2

  const addToFireBase = ()=>{
    const db = getDatabase()
    set(ref(db,"notes/" + inputValue),{
      text:textareaValue,
      id:inputValue
    });
    console.log(db)
  }

  return (
    <div className="add__main">
      content: 
      <textarea className="textarea__note"cols="30" rows="10" placeholder="..." onChange={(e)=>changeTextareaValue(e.target.value)}></textarea>
      <br/>
      <div>
      id: <input type="text" onChange={(e)=>changeInputValue(e.target.value)}/>
      </div>
      <button onClick={()=>addToFireBase()}>save</button>
    </div>
  )
}

export default Speichern