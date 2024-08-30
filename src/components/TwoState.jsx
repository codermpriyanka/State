import React from 'react'
import { useState,useRef } from 'react'

function TwoState() {
    const[name,setName]=useState("PRIYANKA")
    const refElement=useRef("")
    console.log(refElement)

    const resetFunction=()=>{
        setName("")
        refElement.current.focus()
    }
    const handelColour=()=>{
        refElement.current.style.color="blue";
    }
  return (
    <>
      <input ref={refElement} type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={resetFunction}>Reset</button>
      <button onClick={handelColour}>ChangeColour</button>
    </>
  )
}

export default TwoState
