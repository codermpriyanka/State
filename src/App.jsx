import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OneState from './components/OneState'
import TwoState from './components/TwoState'
import ChildA from './components/ChildA'

function App() {
  const name="pinky"
  
  return (
    <>
     <OneState></OneState>
     <TwoState></TwoState>
     <ChildA name={name}/>
        
      
    </>
  )
}

export default App
