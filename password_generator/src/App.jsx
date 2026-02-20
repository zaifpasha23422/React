/* eslint-disable no-unused-vars */
import React, { useState, useCallback ,useEffect ,useRef } from "react"
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "012345678"
    if(charAllowed) str +="!@#$%^&*(){}[]~`"
    for (let i = 1; i<=length; i++) {
      let char = Math.floor(Math.random()*str.length +1 ) 
      console.log(char)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed,charAllowed,setPassword])

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  },[password])
 
  useEffect(()=>{passwordGenerator()}, [length, numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
    
    <div className=" flex flex-col gap-4 bg-gray-800 text-orange-500 my-8 px-4 py-3">
    <h1 className="text-4xl text-white text-center">Password Generator</h1>
    <div className="flex mb-4 overflow-hidden  bg-white">
      <input
          type="text"
          value={password}
          className="outline-none w-full px-3 py-1"
          placeholder="Password"
          readOnly
          ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClipboard} 
      className="bg-blue-700 px-3 py-2">copy</button>
    </div>
    <div className="flex gap-x-2">
      <div className="flex items-center gap-x-1">
        <input 
        type="range"
        min={1}
        max={28}
        onChange={(e)=>{setLength(e.target.value)}} />
        <label>Length:{length}</label>
      </div>
      <div>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={()=>setNumberAllowed((prev)=> !prev)}
        />
        <label >Number</label>
      </div>
        <div>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        onChange={()=>setCharAllowed((prev)=> !prev)}
        />
        <label >Character</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
