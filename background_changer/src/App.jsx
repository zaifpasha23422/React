import React, { useState } from "react"

function App() {
  const [color, setColor] = useState("purple")
  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <button onClick={()=>{setColor("red")}} className="bg-red-600 text-3xl ">Red</button>
      <button onClick={()=>{setColor("yellow")}} className="bg-yellow-600 text-3xl">yellow</button>
      <button onClick={()=>{setColor("green")}} className="bg-green-600 text-3xl">green</button>
      <button onClick={()=>{setColor("blue")}} className="bg-blue-600 text-3xl">blue</button>
    </div>
    </>
  )
}

export default App
