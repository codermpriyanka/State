import React, { useState } from 'react'
import { useEffect } from 'react'

function OneState() {
    const[count,setCount]=useState(0);
    const[name,setName]=useState("ram")
    const updateNumber=()=>{
        setCount(count+1)
    }
    const changeName=()=>{
        setName("sita")
    }
   useEffect(()=>{
    console.log("useEffect is called")
   },[name])
  return (
    <>
    <div>
    Button clicked {count} times.
      <button onClick={updateNumber}>Count</button>
    </div>
     <div>
       My name is {name}
      <button onClick={changeName}>Name</button>
     </div>
      
    </>
  )
}

export default OneState
